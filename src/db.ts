import { DataSource } from "typeorm";

console.log("migraations", __dirname + "/../migrations/*{.ts,.js}");

export const AppDataSource = new DataSource({
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "pets",
    logging: true,
    entities: [ __dirname + "/entities/*{.ts,.js}"],
    migrationsRun: true,
    migrations: [__dirname + "/migrations/*{.ts,.js}"]
})