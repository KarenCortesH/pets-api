import { DataSource } from "typeorm";

console.log("migraations", __dirname + "/../migrations/*{.ts,.js}");

export const AppDataSource = new DataSource({
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "pets_db",
    logging: true,
    entities: [ __dirname + "/entities/*{.ts,.js}"],
    migrationsRun: true,
    migrations: [__dirname + "/migrations/*{.ts,.js}"]
})