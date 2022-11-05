import { CreateUserInput } from "./../dto/userInput";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/user";
import { getRepository } from "typeorm";

@Resolver()
export class UserResolver {
	private userRepository = getRepository(User);

	@Query(() => User)
	async findOneUser(@Arg("id") id: string): Promise<User | undefined> {
		return await this.userRepository.findOne({ id });
	}

	@Mutation(() => User)
	async createUser(@Arg("input") input: CreateUserInput): Promise<User> {
		const entity = this.userRepository.create(input);

		return await this.userRepository.save(entity);
	}
}
