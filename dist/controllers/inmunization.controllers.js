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
exports.updateInmunization = exports.getInmunizations = exports.createInmunization = void 0;
const Inmunization_1 = require("../entities/Inmunization");
const Pet_1 = require("../entities/Pet");
//Create
const createInmunization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, vaccineName, brand, pet } = req.body;
        //Verificacion que el pet exista
        const existingPet = yield Pet_1.Pet.findOne({ where: { id: pet } });
        if (!existingPet)
            throw new Error("cannot get the pet");
        // crear la inmunization
        const inmunization = new Inmunization_1.Inmunization();
        inmunization.date = date;
        inmunization.vaccineName = vaccineName;
        inmunization.brand = brand;
        inmunization.pet = existingPet;
        const savedInmunization = yield inmunization.save();
        // console.log("Saved Inmunization", savedInmunization);
        return res.json(savedInmunization);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createInmunization = createInmunization;
//Read
const getInmunizations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Buscamos en la tabla si hay datos
        const listInmunization = yield Inmunization_1.Inmunization.find();
        return res.status(200).json(listInmunization);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getInmunizations = getInmunizations;
//Update
const updateInmunization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { date, vaccineName, brand, petId } = req.body;
        //Verificar si exite inmunizacion
        const existingInmunizacition = yield Inmunization_1.Inmunization.findOne({ where: { id: +id } });
        if (!existingInmunizacition) {
            throw new Error("cannot get the Inmunization");
        }
        //Verificacion que el pet exista
        let existingPet;
        if (petId) {
            existingPet = yield Pet_1.Pet.findOne({ where: { id: petId } });
            if (!existingPet)
                throw new Error("cannot get the pet");
        }
        //preload de la inmunization
        const preloadedInmunization = yield Inmunization_1.Inmunization.preload({
            id: existingInmunizacition.id,
            date,
            vaccineName,
            brand,
            pet: existingPet
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateInmunization = updateInmunization;
