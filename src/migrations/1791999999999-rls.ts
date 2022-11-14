import { MigrationInterface, QueryRunner } from "typeorm";

export class EnableRowLevelRecurity1791999999999 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "users" ENABLE ROW LEVEL SECURITY`);
		await queryRunner.query(`ALTER TABLE "pets" ENABLE ROW LEVEL SECURITY`);

		await queryRunner.query(
			`CREATE POLICY tenant_policy ON "users" USING ("tenant_id" = current_setting('app.current_tenant_id', true)::UUID)`
		);
		await queryRunner.query(
			`CREATE POLICY tenant_policy ON "pets" USING ("tenant_id" = current_setting('app.current_tenant_id', true)::UUID)`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
