import { getCustomRepository, Repository } from "typeorm";
import { SettingsRepositoy } from "../repositories/settingsRepositoy";
import {SettingsEntities} from '../entities/settingsEntities'

interface ISettingCreate {
    chat: boolean;
    username: string;
}

class SettingService {
    private settingsRepository: Repository<SettingsEntities>;
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepositoy);
    }

    async create({ chat, username }: ISettingCreate) {
        const userAlreadyExists = await this.settingsRepository.findOne({
            username,
        });
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }
        const settings = this.settingsRepository.create({
            chat,
            username,
        });
        await this.settingsRepository.save(settings);
        return settings;
    }

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        });
        return settings;
    }

    async update(username: string, chat: boolean) {
        await this.settingsRepository
            .createQueryBuilder()
            .update(SettingsEntities)
            .set({ chat })
            .where("username = :username", {
                username,
            })
            .execute();
    }

}
export { SettingService }