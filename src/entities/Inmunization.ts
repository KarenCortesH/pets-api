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

@Entity({ name: "inmunization" })
export class Inmunization extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: Date;
    @Column({ name: "vaccine_name" })
    vaccineName: string;
    @Column()
    brand: string;
    @ManyToOne(() => Pet, (pet) => pet.inmunization)
    @JoinColumn({ name: "pet_id" })
    pet: Pet;
    @OneToMany(() => Reminder, (reminder) => reminder.immunization)
    reminder: Reminder[];
}

