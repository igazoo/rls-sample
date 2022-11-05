import { Field, InputType } from "type-graphql";

@InputType()
export class PetInput {
	@Field()
	typeId!: string;

	@Field()
	name!: string;
}

@InputType()
export class CreatePetInput extends PetInput {}
