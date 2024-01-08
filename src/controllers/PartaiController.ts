import { Request, Response } from "express";
import PartaiServices from "../services/PartaiServices";
import { createPartaiSchema } from "../utils/validator/ContentValidator";
import cloudinary from "../libs/cloudinary";

export default new class PartaiController {
    async create(req: Request, res: Response) {
        try {
            const data = {
                name: req.body.name,
                ketuaUmum: req.body.ketuaUmum,
                visiMisi: req.body.visiMisi,
                alamat: req.body.alamat,
                image: res.locals.filename
            }

            const { error, value } = createPartaiSchema.validate(data)
            if (error) return res.status(400).json(error)

            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                name: value.name,
                ketuaUmum: value.ketuaUmum,
                visiMisi: value.visiMisi,
                alamat: value.alamat,
                image: cloudinaryRes.secure_url
            }

            const response = await PartaiServices.create(obj)
            return res
                .status(201)
                .json(response)
        } catch (error) {
            console.error("Error creating paslon:", error)
            return res
                .status(500)
                .json({ message: "internal server error", error: error.message })
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await PartaiServices.getAll();
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error getting all paslon:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await PartaiServices.getOne(id);

            if (typeof data === "string") {
                return res.status(404).json({ message: data })
            }

            let response = {
                message: "success",
                data
            }

            return res.json(response);

        } catch (error) {
            console.error("Error getting the data:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await PartaiServices.delete(id);

            if (typeof response === "string") {
                return res.status(404).json({ message: response });
            }

            return res.status(200).json(response);
        } catch (error) {
            console.error("Error deleting the partai:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number",
                });
            }
            const data = req.body;
            const response = await PartaiServices.update(id, data);
            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating a Partai:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
        }
    }




}