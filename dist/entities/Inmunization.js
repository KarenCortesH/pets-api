"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inmunization = void 0;
const typeorm_1 = require("typeorm");
const Pet_1 = require("./Pet");
const Reminder_1 = require("./Reminder");
let Inmunization = class Inmunization extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inmunization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Inmunization.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inmunization.prototype, "vaccine_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inmunization.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inmunization.prototype, "id_pet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inmunization.prototype, "id_reminder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pet_1.Pet, (pet) => pet.inmunization),
    (0, typeorm_1.JoinColumn)({ name: "pet_id" }),
    __metadata("design:type", Pet_1.Pet)
], Inmunization.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Reminder_1.Reminder, (reminder) => reminder.immunization),
    __metadata("design:type", Array)
], Inmunization.prototype, "reminder", void 0);
Inmunization = __decorate([
    (0, typeorm_1.Entity)({ name: "inmunization" })
], Inmunization);
exports.Inmunization = Inmunization;
