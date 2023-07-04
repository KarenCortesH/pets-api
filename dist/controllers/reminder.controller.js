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
exports.getReminder = exports.deleteReminder = exports.updateReminder = exports.createReminder = void 0;
const Inmunization_1 = require("../entities/Inmunization");
const Reminder_1 = require("../entities/Reminder");
//Create
const createReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, description, immunization } = req.body;
        // Verificamos si existe Inmunization
        const existingInmunization = yield Inmunization_1.Inmunization.findOne({ where: { id: immunization } });
        if (!existingInmunization) {
            throw new Error("Cannot get the Inmunization");
        }
        const createdReminder = Reminder_1.Reminder.create({
            date,
            description,
            immunization: existingInmunization,
        });
        const savedReminder = yield Reminder_1.Reminder.save(createdReminder);
        return res.status(201).json(savedReminder);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createReminder = createReminder;
//Update
const updateReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { date, description } = req.body;
        const existingReminder = yield Reminder_1.Reminder.findOne({
            where: { id: +id }
        });
        if (!existingReminder) {
            throw new Error('can not get the reminder');
        }
        //preload de reminder
        const preloadReminder = yield Reminder_1.Reminder.preload({
            id: existingReminder.id,
            date,
            description,
        });
        //guardar reminder
        const savedReminder = yield Reminder_1.Reminder.save(preloadReminder);
        //Retornar el resultado
        return res.status(200).json(savedReminder);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateReminder = updateReminder;
//Delete
const deleteReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingReminder = yield Reminder_1.Reminder.findOne({
            where: { id: +id }
        });
        if (!existingReminder)
            throw new Error("Cannot get  the reminder");
        const removedReminder = yield Reminder_1.Reminder.remove(existingReminder);
        return res.status(200).json(removedReminder);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteReminder = deleteReminder;
//Read
const getReminder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Verificar si hay datos en la tabla
        const listReminder = yield Reminder_1.Reminder.find();
        return res.status(200).json(listReminder);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
});
exports.getReminder = getReminder;
