import { Repository } from "typeorm";
import { Artikel } from "../entity/Artikel";
import { AppDataSource } from "../data-source";
import { log } from "console";

export default new class ArtikelServices {
    private readonly ArtikelRepository: Repository<Artikel> = AppDataSource.getRepository(Artikel)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.save(data)

            return {
                message: "success creating a new artikel",
                data: response
            }
        } catch (error) {
            return `message: something error while creating artikel`
        }
    }

    async getAll(): Promise<object | string> {
        try {
            // const response = await this.ArtikelRepository.find()
            const response = await this.ArtikelRepository
                .createQueryBuilder("Artikel")
                .getMany();

            const data = response.map((Artikel) => {
                return {
                    id: Artikel.id,
                    title: Artikel.title,
                    author: Artikel.author,
                    article: Artikel.article,
                    image: Artikel.image,
                    date: Artikel.date
                }
            });

            return {
                message: "success get All Data",
                data: data
            }

        } catch (error) {
            return `message: something error while getting all article`
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository
                .createQueryBuilder("Artikel")
                .where("Artikel.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: article not found`
            }

            return response;

        } catch (error) {
            return `message: something error while getting the article`
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const artikelToRemove = await this.ArtikelRepository
                .createQueryBuilder("Artikel")
                .where("Artikel.id = :id", { id })
                .getOne();

            if (!artikelToRemove) {
                return `message: artikel not found`;
            }

            await this.ArtikelRepository.remove(artikelToRemove);

            return {
                message: "success deleting article",
            };
        } catch (error) {
            return `message: something error while deleting article`;
        }
    }

    async update(id: number, data: Artikel): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository
                .createQueryBuilder()
                .update(Artikel)
                .set(data)
                .where("id = :id", { id })
                .execute();
            return {
                message: "success update article",
                data: response
            }
        } catch (error) {
            return "message: something error while update article"
        }
    }

    async getAllArticlesCard(): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.find({
                relations: {
                    user: true,
                },
                select: {
                    id: true,
                    title: true,
                    image: true,
                    user: {
                        fullname: true,
                    },
                },
            });

            return {
                message: "success getting all cards article",
                data: response,
            };
        } catch (error) {
            console.error("Error getting card article:", error);
            return `message: something error while getting cards article`;
        }
    }
    async getOneArticlesCard(id: number): Promise<object | string> {
        try {
            const response = await this.ArtikelRepository.find({
                where: { id },
                relations: {
                    user: true,
                },
                select: {
                    id: true,
                    title: true,
                    image: true,
                    user: {
                        fullname: true,
                    },
                },
            });

            return {
                message: "success getting a card article",
                data: response,
            };
        } catch (error) {
            return "message: something error while getting card article";
        }
    }



}
