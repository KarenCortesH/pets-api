import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTable1684811821877 implements MigrationInterface {
    name = 'AlterUserTable1684811821877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "auth_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "auth_id" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "auth_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "auth_id" integer NOT NULL`);
    }

}
