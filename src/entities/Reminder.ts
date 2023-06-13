    import {
    Column,
    Entity,
    JoinColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    BaseEntity,
    } from "typeorm";
    import { Inmunization } from "./Inmunization";

    @Entity({ name: "reminder" })
    export class Reminder extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    description: string;

    @ManyToOne(() => Inmunization, (inmunization) => inmunization.reminders)
    @JoinColumn({ name: "id_inmunization" })
    immunization: Inmunization;
    }
