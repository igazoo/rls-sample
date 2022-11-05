import { Field, ID, ObjectType } from "type-graphql";
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	RelationId,
} from "typeorm";
import { MsPetType } from "./msPetType";

@Entity("pets")
@ObjectType()
export class Pet {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id!: string;

	@Column("uuid", { name: "tenant_id" })
	tenantId!: string;

	@ManyToOne(() => MsPetType, { lazy: true })
	@JoinColumn({ name: "type_id", referencedColumnName: "id" })
	@Field(() => MsPetType)
	type!: MsPetType;

	@Column({ name: "type_id" })
	@RelationId((pet: Pet) => pet.type)
	typeId!: string;

	@Column()
	@Field()
	name!: string;
}
