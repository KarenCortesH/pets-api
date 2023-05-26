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
exports.getPets = exports.updatePet = exports.deletePet = exports.createPet = void 0;
const Pet_1 = require("../entities/Pet");
const console_1 = require("console");
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, breed, gender, color } = req.body;
        const pet = new Pet_1.Pet();
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;
        console.log(pet);
        const savePet = yield pet.save();
        return savePet;
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createPet = createPet;
const deletePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Pet_1.Pet.delete({ id: parseInt(req.params.id) });
        console.log(result);
        if (result.affected === 0)
            return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deletePet = deletePet;
const updatePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, breed, gender, color } = req.body;
        const pet = yield Pet_1.Pet.findOneBy({ id: parseInt(req.params.id) });
        if (!pet)
            return res.status(404).json({ message: "Pet does not exits" });
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;
        //Aqui guardo los cambios
        pet.save();
        console.log(pet);
        return res.json("Received");
    }
    catch (error) { }
    if (console_1.error instanceof Error) {
        return res.status(500).json({ message: console_1.error.message });
    }
});
exports.updatePet = updatePet;
const getPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //buscamos todos los datos de la base de datos
        const pets = yield Pet_1.Pet.find();
        return res.json(pets);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getPets = getPets;
