import { getCustomRepository, Repository } from "typeorm"
import { UsersRepository } from "../repositories/usersRepository";
import { UsersEntities } from '../entities/usersEntities'

class UsersService {
    private usersRepository: Repository<UsersEntities>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        const userExists = await this.usersRepository.findOne({
            email,
        });

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            email,
        });
        return user;
    }
}
export { UsersService }