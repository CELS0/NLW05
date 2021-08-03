import { UsersEntities } from "../entities/usersEntities"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(UsersEntities)

class UsersRepository extends Repository<UsersEntities> {
}
export { UsersRepository }