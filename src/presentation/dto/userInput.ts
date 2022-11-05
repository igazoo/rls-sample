import { Field, InputType, Int } from "type-graphql";

@InputType()
class UserInput {
	@Field()
	tenantId!: string;

	@Field()
	name!: string;

	@Field(() => Int)
	age!: number;
}

@InputType()
export class CreateUserInput extends UserInput {}

@InputType()
export class UpdateUserInput extends UserInput {
	@Field()
	id!: string;
}
