import { getRepository } from "typeorm";
import { Pet } from "./../../entity/pet";
import { Arg, Mutation, Resolver } from "type-graphql";
import { CreatePetInput } from "../dto/petInput";

@Resolver()
export class PetResolver {
	private repo = getRepository(Pet);

	@Mutation(() => Pet)
	async createPet(@Arg("input") input: CreatePetInput): Promise<Pet> {
		const entity = this.repo.create(input);

		entity.tenantId = "22a1b882-ce7d-7d51-9ba5-28808d6d6b4c";

		return await this.repo.save(entity);
	}
}
