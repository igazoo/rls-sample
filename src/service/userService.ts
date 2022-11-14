import { Connection } from "./../../node_modules/@types/pg/index.d";
import { query } from "express";
import { createConnection, getCustomRepository } from "typeorm";
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

	async findOneById(id: string): Promise<User | undefined> {
		// await this.repo.queryRunner?.query(
		// 	`SET app.current_tenant_id = '11a1b882-ce7d-7d51-9ba5-28808d6d6b4c';`
		// );
		const result = await this.repo.findOneById(id);

		if (!result) throw new Error("not found users");

		return result;
	}
}
