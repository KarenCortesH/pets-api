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
exports.AlterUserTable1684811821877 = void 0;
class AlterUserTable1684811821877 {
    constructor() {
        this.name = 'AlterUserTable1684811821877';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "auth_id"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "auth_id" character varying(50) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "auth_id"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "auth_id" integer NOT NULL`);
        });
    }
}
exports.AlterUserTable1684811821877 = AlterUserTable1684811821877;
