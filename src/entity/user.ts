import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
@ObjectType()
export class User {
	@PrimaryGeneratedColumn()
	@Field()
	id!: string;

	@Column("uuid", { name: "tenant_id" })
	tenantId!: string;

	@Column()
	@Field()
	name!: string;

	@Column()
	@Field(() => Int)
	age!: number;
}
