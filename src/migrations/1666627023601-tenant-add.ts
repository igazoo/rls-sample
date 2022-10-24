import {MigrationInterface, QueryRunner} from "typeorm";

export class tenantAdd1666627023601 implements MigrationInterface {
    name = 'tenantAdd1666627023601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "tenant_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tenant_id"`);
    }

}
