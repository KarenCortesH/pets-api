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
exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const User_1 = require("../entities/User");
//Create
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, identificationNumber, phoneNumber, email, address } = req.body;
        //Instanciamos
        const user = new User_1.User();
        user.authUid = "sdfdsvxcxcvxcvxcxvcxvcx";
        user.fullName = fullName;
        user.identificationNumber = identificationNumber;
        user.phoneNumber = phoneNumber;
        user.email = email;
        user.address = address;
        const savedUser = yield user.save();
        return savedUser;
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createUser = createUser;
//Update
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber, email, address } = req.body;
        //Llamamos el modelo de user y buscamos por la propiedad ID
        const user = yield User_1.User.findOneBy({ id: parseInt(req.params.id) });
        if (!user)
            return res.status(404).json({ message: "User does not exists" });
        user.phoneNumber = phoneNumber;
        user.email = email;
        user.address = address;
        //Aqui estoy guardando
        user.save();
        return res.json("Received");
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateUser = updateUser;
//Delete
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield User_1.User.delete({ id: parseInt(req.params.id) });
        if (result.affected === 0)
            return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteUser = deleteUser;
