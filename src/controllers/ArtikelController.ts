import { Request, Response } from "express";
import ArtikelServices from "../services/ArtikelServices";
import { createArticleSchema } from "../utils/validator/ContentValidator";
import cloudinary from "../libs/cloudinary";
import { Artikel } from "../entity/Artikel";


export default new class ArtikelController {
    async create(req: Request, res: Response) {
        try {

            const loginSession = res.locals.loginSession
            console.log(loginSession.obj)

            const data = {
                title: req.body.title,
                article: req.body.article,
                image: res.locals.filename,
                date: req.body.date
            }


            const { error, value } = createArticleSchema.validate(data)
            if (error) return res.status(400).json(error)

            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                title: value.title,
                author: loginSession.obj.fullname,
                article: value.article,
                image: cloudinaryRes.secure_url,
                date: value.date,
                user: {
                    id: loginSession.obj.id
                }
            }

            const response = await ArtikelServices.create(obj)

            return res
                .status(201)
                .json(response)
        } catch (error) {
            console.error("Error creating article:", error)
            return res
                .status(500)
                .json({ message: "internal server error", error: error.message })
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await ArtikelServices.getAll();
            return res.status(200).json(response)
        } catch (error) {
            console.error("Error getting all article:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await ArtikelServices.getOne(id);

            if (typeof data === "string") {
                return res.status(404).json({ message: data })
            }

            let response = {
                message: "success",
                data
            }

            return res.json(response);

        } catch (error) {
            console.error("Error getting the article:", error)
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await ArtikelServices.delete(id);

            if (typeof response === "string") {
                return res.status(404).json({ message: response });
            }

            return res.status(200).json(response);
        } catch (error) {
            console.error("Error deleting article:", error);
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
            const response = await ArtikelServices.update(id, data);
            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating a Article:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
        }
    }

    async getAllArticleCard(req: Request, res: Response) {
        try {
            const response = await ArtikelServices.getAllArticlesCard();
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error getting all articles:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
        }
    }
    async getOneArticleCard(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);

            if (isNaN(id)) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number",
                });
            }

            const response = await ArtikelServices.getOneArticlesCard(id);
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error getting a Article:", error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
            });
        }
    }




}

// async update(req: Request, res: Response) {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const dataToUpdate = {
//             title: req.body.title || null,
//             author: req.body.author || null,
//             article: req.body.article || null,
//             image: res.locals.filename || null,
//             date: req.body.date
//         };

//         const response = await ArtikelServices.update(id, dataToUpdate);

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error("Error updating article:", error);
//         return res
//             .status(500)
//             .json({ message: "Internal server error", error: error.message });
//     }
// }


// const newTitle = req.body.newTitle;

// const response = await ArtikelServices.updateTitle(id, newTitle);

// async updateTitle(req: Request, res: Response) {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const newTitle = req.body.newTitle;
//         const dataToUpdate = {
//             title: req.body.newTitle
//         }

//         const response = await ArtikelServices.updateTitle(id, dataToUpdate);

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error("Error updating title:", error);
//         return res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// }