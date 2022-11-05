import { MigrationInterface, QueryRunner } from "typeorm";

export class msPetTypeInsert1667631460756 implements MigrationInterface {
	name = "msPetTypeInsert1667631460756";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into("ms_pet_types")
			.values([
				{
					id: "dog",
					name: "犬",
				},
				{
					id: "cat",
					name: "猫",
				},
				{
					id: "rabbit",
					name: "うさぎ",
				},
			])
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
