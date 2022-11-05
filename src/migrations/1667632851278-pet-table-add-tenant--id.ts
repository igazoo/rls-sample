import { MigrationInterface, QueryRunner } from "typeorm";

export class petTableAddTenantId1667632851278 implements MigrationInterface {
	name = "petTableAddTenant-Id1667632851278";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "pets" ADD "tenant_id" uuid NOT NULL`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "tenant_id"`);
	}
}
