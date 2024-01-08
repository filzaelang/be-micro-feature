import { Request, Response } from "express";
import PaslonServices from "../services/PaslonServices";
import { createPaslonSchema } from "../utils/validator/ContentValidator";
import cloudinary from "../libs/cloudinary";

export default new class PaslonController {
    async create(req: Request, res: Response) {
        try {
            const data = {
                name: req.body.name,
                noUrut: req.body.noUrut,
                visiMisi: req.body.visiMisi,
                image: res.locals.filename
            }

            const { error, value } = createPaslonSchema.validate(data)
            if (error) return res.status(400).json(error)

            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                name: value.name,
                noUrut: value.noUrut,
                visiMisi: value.visiMisi,
                image: cloudinaryRes.secure_url
            }

            console.log(obj)

            const response = await PaslonServices.create(obj)
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
            const response = await PaslonServices.getAll();
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
            const data = await PaslonServices.getOne(id);

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
            const response = await PaslonServices.delete(id);

            if (typeof response === "string") {
                return res.status(404).json({ message: response });
            }

            return res.status(200).json(response);
        } catch (error) {
            console.error("Error deleting the paslon:", error);
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
                    error: "Invalid input for type number"
                })
            }
            const data = {
                name: req.body.name,
                no: req.body.no,
                visionAndMission: req.body.visionAndMission,
                picture: res.locals.filename,
            };
            const response = await PaslonServices.update(id, data);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


}