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
exports.AlterUserTable1684807335539 = void 0;
class AlterUserTable1684807335539 {
    constructor() {
        this.name = 'AlterUserTable1684807335539';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "identificationNumber"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "full_name" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "identification_number" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "phone_number" integer NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "identification_number"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "full_name"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "identificationNumber" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "fullName" character varying NOT NULL`);
        });
    }
}
exports.AlterUserTable1684807335539 = AlterUserTable1684807335539;
