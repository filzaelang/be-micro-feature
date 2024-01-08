import { Repository } from "typeorm";
import { Paslon } from "../entity/Paslon";
import { AppDataSource } from "../data-source";

export default new class PaslonServices {
    private readonly PaslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.save(data)

            return {
                message: "success creating a new paslon",
                data: response
            }
        } catch (error) {
            return `message: something error while creating paslon`
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.find()
            const data = response.map((Paslon) => {
                return {
                    id: Paslon.id,
                    name: Paslon.name,
                    noUrut: Paslon.noUrut,
                    visiMisi: Paslon.visiMisi,
                    image: Paslon.image
                }
            })

            return {
                message: "success get All Data",
                data: data
            }

        } catch (error) {
            return `message: something error while getting all paslon`
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.PaslonRepository
                .createQueryBuilder("Paslon")
                .where("Paslon.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: paslon not found`
            }

            return response;
        } catch (error) {
            return `message: something error while getting the data`
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const paslonToRemove = await this.PaslonRepository
                .createQueryBuilder("Paslon")
                .where("Paslon.id = :id", { id })
                .getOne();

            if (!paslonToRemove) {
                return `message: paslon not found`;
            }

            await this.PaslonRepository.remove(paslonToRemove);

            return {
                message: "success deleting paslon",
            };
        } catch (error) {
            return `message: something error while deleting paslon`;
        }
    }

    async update(id: number, data: any): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.update(id, data)
            return {
                message: "success update paslon",
                data: response
            }
        } catch (error) {
            return "message: something error while update paslon"
        }
    }
}