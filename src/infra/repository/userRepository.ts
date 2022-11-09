import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entity/user";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	async findOneById(id: string): Promise<User | undefined> {
		return await this.findOne(id);
	}
}
