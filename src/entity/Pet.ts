    import {
    Column,
    Entity,
    OneToMany,
    JoinColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    BaseEntity,
    } from "typeorm";
    import { User } from "./User";
    import { Inmunization } from "./Inmunization";

    @Entity()
    export class Pet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    breed: string;

    @Column()
    gender: string;

    @Column()
    color: string;

    @ManyToOne(() => User, (user) => user.pet)
    @JoinColumn({ name: "user" })
    user: User;

    @OneToMany(() => Inmunization, (inmunization) => inmunization.pet)
    inmunization: Inmunization[];
    }
