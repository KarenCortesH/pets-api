import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPetTable1684807729668 implements MigrationInterface {
    name = 'AlterPetTable1684807729668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_409e22cced6b76ee1086e0c428d"`);
        await queryRunner.query(`ALTER TABLE "reminder" RENAME COLUMN "idinmunization" TO "id_inmunization"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_1b57ed7745e4b40d176a31babe3" FOREIGN KEY ("id_inmunization") REFERENCES "inmunization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_1b57ed7745e4b40d176a31babe3"`);
        await queryRunner.query(`ALTER TABLE "reminder" RENAME COLUMN "id_inmunization" TO "idinmunization"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_409e22cced6b76ee1086e0c428d" FOREIGN KEY ("idinmunization") REFERENCES "inmunization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
