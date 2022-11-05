import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("ms_pet_types")
@ObjectType()
export class MsPetType {
	@PrimaryColumn()
	@Field(() => ID)
	id!: string;

	@Column()
	name!: string;
}
