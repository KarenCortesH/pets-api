"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
console.log("migraations", __dirname + "/../migrations/*{.ts,.js}");
exports.AppDataSource = new typeorm_1.DataSource({
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "pets_db",
    logging: true,
    entities: [__dirname + "/entities/*{.ts,.js}"],
    migrationsRun: true,
    migrations: [__dirname + "/migrations/*{.ts,.js}"]
});
