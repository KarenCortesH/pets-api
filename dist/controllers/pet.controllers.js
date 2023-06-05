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
exports.deletePet = exports.updatePet = exports.getPet = exports.getPets = exports.createPet = void 0;
const Pet_1 = require("../entities/Pet");
const User_1 = require("../entities/User");
const console_1 = require("console");
// Create
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, breed, gender, color, userId } = req.body;
        const existingUser = yield User_1.User.findOne({ where: { id: userId } });
        if (!existingUser) {
            throw new Error('No se encontro el usuario con id: ${userId}');
        }
        const pet = new Pet_1.Pet();
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;
        pet.user = existingUser;
        const savedPet = yield pet.save();
        console.log('savedPet', savedPet);
        return res.json(savedPet);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createPet = createPet;
// Read
const getPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //buscamos todos los datos de la base de datos
        const listPets = yield Pet_1.Pet.find();
        return res.status(200).json(listPets);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getPets = getPets;
const getPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingPet = yield Pet_1.Pet.findOne({ where: { id: +id } });
        if (!existingPet)
            throw new Error("cannot get the pet");
        return res.status(200).json(existingPet);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getPet = getPet;
// Update
const updatePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fullName, breed, gender, color, userId } = req.body;
        // verifico que el pet exista
        const existingPet = yield Pet_1.Pet.findOne({ where: { id: +id } });
        if (!existingPet)
            throw new Error("cannot get the pet");
        // si me enviaron userId en el body
        // entonces verifico que el usuario exista
        let existingUser;
        if (userId) {
            existingUser = yield User_1.User.findOne({ where: { id: userId } });
            if (!existingUser) {
                throw new Error("cannot get the user");
            }
        }
        // hago preload del pet
        const preloadedPet = yield Pet_1.Pet.preload({
            id: existingPet.id,
            fullName,
            breed,
            gender,
            color,
            user: existingUser,
        });
        // guardo los cambios en pet
        const savedPed = yield Pet_1.Pet.save(preloadedPet);
        // retorno el resultado
        return res.status(200).json(savedPed);
    }
    catch (error) { }
    if (console_1.error instanceof Error) {
        return res.status(500).json({ message: console_1.error.message });
    }
});
exports.updatePet = updatePet;
// Delete
const deletePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingPet = yield Pet_1.Pet.findOne({ where: { id: +id } });
        if (!existingPet)
            throw new Error("cannot get the pet");
        const removedPet = yield Pet_1.Pet.remove(existingPet);
        return res.status(200).json(removedPet);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deletePet = deletePet;
