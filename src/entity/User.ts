    import {
    Column,
    Entity,
    OneToMany,
    JoinColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    } from "typeorm";
    import { Pet } from "./Pet";
    @Entity()
    export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auth_id: number;

    @Column()
    full_name: string;

    @Column()
    id_number: number;

    @Column()
    phone_number: number;

    @Column()
    email: string;

    @Column()
    address: string;

    @OneToMany(() => Pet, (pet) => pet.user)
    pet: Pet[];
    }
