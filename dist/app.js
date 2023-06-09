"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const pet_routes_1 = __importDefault(require("./routes/pet.routes"));
const inmunization_routes_1 = __importDefault(require("./routes/inmunization.routes"));
const reminder_routes_1 = __importDefault(require("./routes/reminder.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
//Utiliza el metodo JSON
app.use(express_1.default.json());
//Aqui lo estoy llamando
app.use(user_routes_1.default);
app.use(pet_routes_1.default);
app.use(inmunization_routes_1.default);
app.use(reminder_routes_1.default);
exports.default = app;
