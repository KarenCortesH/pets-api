    import {
    Column,
    Entity,
    JoinColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    } from "typeorm";
    import { Inmunization } from "./Inmunization";

    @Entity()
    export class Reminder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    description: string;

    @ManyToOne(() => Inmunization, (inmunization) => inmunization.reminder)
    @JoinColumn({ name: "idinmunization" })
    immunization: Inmunization;
    }
