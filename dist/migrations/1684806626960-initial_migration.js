"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1684806626960 = void 0;
class InitialMigration1684806626960 {
    constructor() {
        this.name = 'InitialMigration1684806626960';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "auth_id" integer NOT NULL, "fullName" character varying NOT NULL, "identificationNumber" integer NOT NULL, "phoneNumber" integer NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "reminder" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "idinmunization" integer, CONSTRAINT "PK_9ec029d17cb8dece186b9221ede" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "inmunization" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "vaccine_name" character varying NOT NULL, "brand" character varying NOT NULL, "id_pet" integer NOT NULL, "id_reminder" integer NOT NULL, "pet_id" integer, CONSTRAINT "PK_b818aca1fe1be434a2d2cea8e2b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "breed" character varying NOT NULL, "gender" character varying NOT NULL, "color" character varying NOT NULL, "user" integer, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_409e22cced6b76ee1086e0c428d" FOREIGN KEY ("idinmunization") REFERENCES "inmunization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "inmunization" ADD CONSTRAINT "FK_9bd660e3bfdec45f52aea9f66f3" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17"`);
            yield queryRunner.query(`ALTER TABLE "inmunization" DROP CONSTRAINT "FK_9bd660e3bfdec45f52aea9f66f3"`);
            yield queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_409e22cced6b76ee1086e0c428d"`);
            yield queryRunner.query(`DROP TABLE "pet"`);
            yield queryRunner.query(`DROP TABLE "inmunization"`);
            yield queryRunner.query(`DROP TABLE "reminder"`);
            yield queryRunner.query(`DROP TABLE "user"`);
        });
    }
}
exports.InitialMigration1684806626960 = InitialMigration1684806626960;
