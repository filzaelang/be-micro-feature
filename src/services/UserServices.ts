import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new class AuthServices {
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async delete(idUser: string): Promise<object | string> {
        try {
            const response = await this.UserRepository.delete(idUser)

            return {
                message: "success",
                data: response
            }
        } catch (error) {
            throw error
        }
    }
}