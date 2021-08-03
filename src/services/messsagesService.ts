import { getCustomRepository, Repository } from "typeorm"
import { MessagesEntities } from "../entities/messagesEntities";
import { MessagesRepositoy } from "../repositories/messagesRepositoy ";

interface IMessagesService {
    admin_id?: string;
    user_id: string;
    text: string;
}

class MessagesService {
    private messagesRepository: Repository<MessagesEntities>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepositoy);
    }
    async create({ admin_id, text, user_id }: IMessagesService) {
        const message = this.messagesRepository.create({
          admin_id,
          text,
          user_id,
        });
    
        await this.messagesRepository.save(message);
    
        return message;
      }
    
      async listByUser(user_id: string) {
        const list = await this.messagesRepository.find({
          where: { user_id },
          relations: ["usersEntities"],
        });
    
        return list;
      }
    }
    
    export { MessagesService };