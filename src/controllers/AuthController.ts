import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";
import { loginSchema, registerSchema } from "../utils/validator/AuthValidator";

export default new class AuthController {
    async register(req: Request, res: Response) {
        try {
            const data = {
                fullname: req.body.fullname,
                alamat: req.body.alamat,
                jenisKelamin: req.body.jenisKelamin,
                username: req.body.username,
                password: req.body.password,
                age: req.body.age
            }



            const { error, value } = registerSchema.validate(data)
            if (error) return res.status(400).json(error)

            const response = await AuthServices.register(value)

            return res
                .status(201)
                .json(response)
        } catch (error) {
            console.error("Error creating user:", error)
            return res
                .status(500)
                .json({ message: "internal server error", error: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password
            }

            const { error, value } = loginSchema.validate(data)
            if (error) return res.status(400).json(error)

            const response = await AuthServices.login(value)

            return res
                .status(201)
                .json(response)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}