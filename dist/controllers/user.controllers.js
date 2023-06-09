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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.signIn = void 0;
const User_1 = require("../entities/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
//import jwt from 'jsonwebtoken';
const jwt = require("jsonwebtoken;");
const SECRETE_KEY = "PETS_API";
const saltRounds = 10;
// SignIn
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const existingEmail = yield User_1.User.findOne({ where: { email: email } });
        if (!existingEmail) {
            throw new Error('User not found');
        }
        const existingPass = yield bcrypt_1.default.compare(password, existingEmail.password);
        if (!existingPass) {
            throw new Error('Invalid Credentials');
        }
        const token = jwt.signin({ email: existingEmail.email, id: existingEmail.id }, SECRETE_KEY);
        res.status(201).json({ token: token });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.signIn = signIn;
//Create
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, identificationNumber, phoneNumber, email, address, password } = req.body;
        //Instanciamos
        const user = new User_1.User();
        user.fullName = fullName;
        user.identificationNumber = identificationNumber;
        user.phoneNumber = phoneNumber;
        user.email = email;
        user.address = address;
        user.password = yield bcrypt_1.default.hash(password, saltRounds);
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
