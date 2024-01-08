import { Repository, UpdateResult } from "typeorm";
import { Partai } from "../entity/Partai";
import { Paslon } from "../entity/Paslon";
import { AppDataSource } from "../data-source";

export default new class PartaiServices {
    private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.save(data)

            return {
                message: "success creating a new partai",
                data: response
            }
        } catch (error) {
            return `message: something error while creating partai`
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.find()
            const data = response.map((Partai) => {
                return {
                    id: Partai.id,
                    name: Partai.name,
                    ketuaUmum: Partai.ketuaUmum,
                    visiMisi: Partai.visiMisi,
                    alamat: Partai.alamat,
                    image: Partai.image
                }
            })

            return {
                message: "success get All Data",
                data: data
            }

        } catch (error) {
            return `message: something error while getting all partai`
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.PartaiRepository
                .createQueryBuilder("Partai")
                .where("Partai.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: partai not found`
            }

            return response;
        } catch (error) {
            return `message: something error while getting the data`
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const partaiToRemove = await this.PartaiRepository
                .createQueryBuilder("Partai")
                .where("Partai.id = :id", { id })
                .getOne();

            if (!partaiToRemove) {
                return `message: partai not found`;
            }

            await this.PartaiRepository.remove(partaiToRemove);

            return {
                message: "success deleting the partai",
            };
        } catch (error) {
            return `message: something error while deleting partai`;
        }
    }

    async update(id: number, data: Partai): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.update(id, data)
            return {
                message: "success update partai",
                data: response
            }
        } catch (error) {
            console.error("Error updating partai:", error);
            return "message: something error while update partai";
        }
    }




}