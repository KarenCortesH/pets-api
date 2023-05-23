import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTable1684807335539 implements MigrationInterface {
    name = 'AlterUserTable1684807335539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "identificationNumber"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "full_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "identification_number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone_number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "identification_number"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "identificationNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullName" character varying NOT NULL`);
    }

}
