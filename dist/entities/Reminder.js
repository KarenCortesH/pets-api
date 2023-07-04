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
exports.Reminder = void 0;
const typeorm_1 = require("typeorm");
const Inmunization_1 = require("./Inmunization");
let Reminder = class Reminder extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reminder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Reminder.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reminder.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Inmunization_1.Inmunization, (inmunization) => inmunization.reminders),
    (0, typeorm_1.JoinColumn)({ name: "id_inmunization" }),
    __metadata("design:type", Inmunization_1.Inmunization)
], Reminder.prototype, "immunization", void 0);
Reminder = __decorate([
    (0, typeorm_1.Entity)({ name: "reminder" })
], Reminder);
exports.Reminder = Reminder;
