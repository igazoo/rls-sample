import { UserRepository } from "./../../infra/repository/userRepository";
import { CreateUserInput } from "./../dto/userInput";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/user";
import { getCustomRepository } from "typeorm";
import { UserService } from "../../service/userService";

@Resolver()
export class UserResolver {
	@Query(() => User)
	async findOneUser(@Arg("id") id: string): Promise<User | undefined> {
		const service = new UserService();
		return await service.findOneById(id);
	}

	@Mutation(() => User)
	async createUser(@Arg("input") input: CreateUserInput): Promise<User> {
		const service = new UserService();

		return await service.create(input);
	}
}
