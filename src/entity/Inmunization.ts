    import {
    Column,
    Entity,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    BaseEntity,
    } from "typeorm";
    import { Pet } from "./Pet";
    import { Reminder } from "./Reminder";

    @Entity()
    export class Inmunization extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    vaccine_name: string;

    @Column()
    brand: string;

    @Column()
    id_pet: number;

    @Column()
    id_reminder: number;

    @ManyToOne(() => Pet, (pet) => pet.inmunization)
    @JoinColumn({ name: "pet_id" })
    @Column()
    pet: Pet;

    @OneToMany(() => Reminder, (reminder) => reminder.immunization)
    reminder: Reminder[];
    }

