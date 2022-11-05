import { getCustomRepository } from "typeorm";
import { User } from "../entity/user";
import { UserRepository } from "../infra/repository/userRepository";
import { CreateUserInput } from "./../presentation/dto/userInput";
export class UserService {
	private repo = getCustomRepository(UserRepository);

	async create(input: CreateUserInput): Promise<User> {
		const entity = this.repo.create(input);

		entity.tenantId = "22a1b882-ce7d-7d51-9ba5-28808d6d6b4c";

		return await this.repo.save(entity);
	}
}
