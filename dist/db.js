"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "pets",
    logging: true,
    entities: []
});
