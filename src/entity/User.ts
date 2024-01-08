import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, OneToOne } from "typeorm";
import { Artikel } from "./Artikel";
import { Voter } from "./Voter";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    alamat: string;

    @Column()
    jenisKelamin: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @OneToOne(() => Voter, (voter) => voter.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    voter: Voter;

    @OneToMany(() => Artikel, (artikel) => artikel.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    articles: Artikel[];
}

