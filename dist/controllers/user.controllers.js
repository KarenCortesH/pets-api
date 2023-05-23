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
exports.createUser = void 0;
const User_1 = require("../entities/User");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.send("Hello World 2");
    const { fullName, identificationNumber, phoneNumber, email, address } = req.body;
    //Instanciamos
    const user = new User_1.User();
    user.authUid = "sdfdsvxcxcvxcvxcxvcxvcx";
    user.fullName = fullName;
    user.identificationNumber = identificationNumber;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.address = address;
    console.log(user);
    const savedUser = yield user.save();
    return savedUser;
});
exports.createUser = createUser;
