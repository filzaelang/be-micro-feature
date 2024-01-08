
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User"; // Sesuaikan dengan path yang benar

export default new class AuthMiddleware {
    async Auth(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) return res.status(401).json({
            message: "unauthorize"
        });

        const token = authHeader.split(" ")[1];

        try {
            const decodedToken: any = jwt.verify(token, "ANJAY"); // Sesuaikan dengan kunci yang benar

            // Dapatkan data pengguna dari database menggunakan ID
            const userRepository = getRepository(User);
            const user = await userRepository.findOne(decodedToken.user.id);

            if (!user) {
                return res.status(401).json({ message: "User not found" });
            }

            // Gabungkan data pengguna dengan payload token
            res.locals.loginSession = {
                user: {
                    id: user.id,
                    fullname: user.fullname,
                    alamat: user.alamat,
                    jenisKelamin: user.jenisKelamin,
                    username: user.username,
                    age: user.age
                    // Tambahkan properti lainnya sesuai kebutuhan
                }
            };

            next();
        } catch (error) {
            return res.status(401).json({ message: "token not valid" });
        }
    }
};
