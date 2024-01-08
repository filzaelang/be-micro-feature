import { Repository } from "typeorm";
import { Voter } from "../entity/Voter";
import { AppDataSource } from "../data-source";

export default new class VoterServices {
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.VoterRepository.save(data)

            return {
                message: "success creating a new vote",
                data: response
            }
        } catch (error) {
            return `message: something error while creating vote`
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.VoterRepository.find({
                relations: ["User", "Paslon"],
                select: {
                    user: {
                        fullname: true,
                        alamat: true,
                        jenisKelamin: true
                    },
                    votedPaslon: {
                        name: true
                    }
                }
            });

            const countVoters = await this.VoterRepository.count()

            return {
                message: "success get All Vote",
                countVoters: countVoters,
                data: response
            }

        } catch (error) {
            return `message: something error while getting all content`
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.VoterRepository
                .createQueryBuilder("Voter")
                .where("Voter.id = :id", { id })
                .getOne();
            if (!response) {
                return `message: vote not found`
            }

            return response;

        } catch (error) {
            return `message: something error while getting the vote`
        }
    }
}