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
exports.AlterInmunizationTable1685156954199 = void 0;
class AlterInmunizationTable1685156954199 {
    constructor() {
        this.name = 'AlterInmunizationTable1685156954199';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "inmunization" DROP COLUMN "id_pet"`);
            yield queryRunner.query(`ALTER TABLE "inmunization" DROP COLUMN "id_reminder"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "inmunization" ADD "id_reminder" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "inmunization" ADD "id_pet" integer NOT NULL`);
        });
    }
}
exports.AlterInmunizationTable1685156954199 = AlterInmunizationTable1685156954199;
