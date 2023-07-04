import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDeleteUserTable1688437054444 implements MigrationInterface {
    name = 'AlterDeleteUserTable1688437054444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "auth_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "auth_id" character varying(50) NOT NULL`);
    }

}
