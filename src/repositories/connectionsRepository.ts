import { EntityRepository, Repository } from "typeorm"
import { ConnectionsEntities } from "../entities/connectionsEntities"

@EntityRepository (ConnectionsEntities)
class ConnectionsRepositoy extends Repository<ConnectionsEntities>{

}

export {ConnectionsRepositoy}