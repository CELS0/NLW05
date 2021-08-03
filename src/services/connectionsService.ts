import { getCustomRepository, Repository } from "typeorm"
import { ConnectionsEntities } from "../entities/connectionsEntities";
import { ConnectionsRepositoy } from "../repositories/connectionsRepository"



interface IConnectionCreate {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}


class ConnectionsService {
    [x: string]: any;
    private connectionsRepository: Repository<ConnectionsEntities>
    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepositoy);
    }
    async create({ id, admin_id, socket_id, user_id }: IConnectionCreate) {
        const connection = await this.connectionsRepository.create({
            id,
            admin_id,
            socket_id,
            user_id
        })
        const result = await this.connectionsRepository.save(connection);
        return result;
    }
    async findByUserId(user_id: string) {
      const connection = await this.connectionsRepository.findOne({
        user_id,
      });
  
      return connection;
    }
  
    async findAllWithoutAdmin() {
      const connections = await this.connectionsRepository.find({
        where: { admin_id: null },
        relations: ["usersEntities"],
      });
  
      return connections;
    }
  
    async findBySocketID(socket_id: string) {
      const connection = await this.connectionsRepository.findOne({
        socket_id,
      });
  
      return connection;
    }
  
    async updateAdminID(user_id: string, admin_id: string) {
      await this.connectionsRepository
        .createQueryBuilder()
        .update(ConnectionsEntities)
        .set({ admin_id })
        .where("user_id = :user_id", {
          user_id,
        })
        .execute();
    }
  
    async deleteBySocketId(socket_id: string) {
      await this.connectionsRepository
        .createQueryBuilder()
        .delete()
        .where("socket_id = :socket_id", {
          socket_id,
        })
        .execute();
    }
  }
  
  export { ConnectionsService };