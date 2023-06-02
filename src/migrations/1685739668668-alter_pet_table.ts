import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPetTable1685739668668 implements MigrationInterface {
    name = 'AlterPetTable1685739668668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "user" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64704296b7bd17e90ca0a620a98" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64704296b7bd17e90ca0a620a98"`);
        await queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "user_id" TO "user"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
