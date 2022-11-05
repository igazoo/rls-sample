import {MigrationInterface, QueryRunner} from "typeorm";

export class tenantDataTypeFix1667629344241 implements MigrationInterface {
    name = 'tenantDataTypeFix1667629344241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tenant_id" uuid NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tenant_id" character varying NOT NULL`);
    }

}
