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
exports.AlterPetTable1684807729668 = void 0;
class AlterPetTable1684807729668 {
    constructor() {
        this.name = 'AlterPetTable1684807729668';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_409e22cced6b76ee1086e0c428d"`);
            yield queryRunner.query(`ALTER TABLE "reminder" RENAME COLUMN "idinmunization" TO "id_inmunization"`);
            yield queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_1b57ed7745e4b40d176a31babe3" FOREIGN KEY ("id_inmunization") REFERENCES "inmunization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_1b57ed7745e4b40d176a31babe3"`);
            yield queryRunner.query(`ALTER TABLE "reminder" RENAME COLUMN "id_inmunization" TO "idinmunization"`);
            yield queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_409e22cced6b76ee1086e0c428d" FOREIGN KEY ("idinmunization") REFERENCES "inmunization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.AlterPetTable1684807729668 = AlterPetTable1684807729668;
