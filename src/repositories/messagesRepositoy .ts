import { EntityRepository, Repository } from "typeorm"
import { MessagesEntities } from "../entities/messagesEntities"
@EntityRepository (MessagesEntities)
class MessagesRepositoy extends Repository<MessagesEntities>{

}

export {MessagesRepositoy}