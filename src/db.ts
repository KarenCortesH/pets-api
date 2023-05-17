import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "pets",
    logging: true,
    entities: []
})