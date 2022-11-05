import {MigrationInterface, QueryRunner} from "typeorm";

export class petTable1667631460755 implements MigrationInterface {
    name = 'petTable1667631460755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ms_pet_types" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c7499837b0b4243792ab1adc426" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "type_id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_728f08a9316373fc2b9bcad30df" FOREIGN KEY ("type_id") REFERENCES "ms_pet_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_728f08a9316373fc2b9bcad30df"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "ms_pet_types"`);
    }

}
