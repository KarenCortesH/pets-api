import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTable1688433404418 implements MigrationInterface {
    name = 'AlterUserTable1688433404418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
