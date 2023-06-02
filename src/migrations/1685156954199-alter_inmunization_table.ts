import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterInmunizationTable1685156954199 implements MigrationInterface {
    name = 'AlterInmunizationTable1685156954199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmunization" DROP COLUMN "id_pet"`);
        await queryRunner.query(`ALTER TABLE "inmunization" DROP COLUMN "id_reminder"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inmunization" ADD "id_reminder" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inmunization" ADD "id_pet" integer NOT NULL`);
    }

}
