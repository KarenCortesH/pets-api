import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";

import { Pet } from "./Pet";

@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "auth_id",
    type: "varchar",
    length: 50,
  })
  authUid: string;

  @Column({ name: "full_name" })
  fullName: string;

  @Column({ name: "identification_number" })
  identificationNumber: number;

  @Column({ name: "phone_number", type: "varchar", length: "10"})
  phoneNumber: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @OneToMany(() => Pet, (pet) => pet.user)
  pet: Pet[];
}
