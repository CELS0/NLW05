import { EntityRepository, Repository } from "typeorm"
import { SettingsEntities } from "../entities/settingsEntities"
@EntityRepository (SettingsEntities)
class SettingsRepositoy extends Repository<SettingsEntities>{

}

export {SettingsRepositoy}