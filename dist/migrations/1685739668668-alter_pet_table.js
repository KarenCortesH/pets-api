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
exports.AlterPetTable1685739668668 = void 0;
class AlterPetTable1685739668668 {
    constructor() {
        this.name = 'AlterPetTable1685739668668';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17"`);
            yield queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "user" TO "user_id"`);
            yield queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64704296b7bd17e90ca0a620a98" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64704296b7bd17e90ca0a620a98"`);
            yield queryRunner.query(`ALTER TABLE "pet" RENAME COLUMN "user_id" TO "user"`);
            yield queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_dec7c4c65d11ebe3f015780ae17" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.AlterPetTable1685739668668 = AlterPetTable1685739668668;
