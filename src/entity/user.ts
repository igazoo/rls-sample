import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	id!: string;

	@Column({ name: "tenant_id" })
	tenantId!: string;

	@Column()
	name!: string;

	@Column()
	age!: number;
}
