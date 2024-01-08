import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Partai } from "./Partai";
import { Voter } from "./Voter";

@Entity({ name: "paslons" })
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    noUrut: number;

    @Column()
    visiMisi: string;

    @Column()
    image: string;

    @OneToMany(() => Voter, voter => voter.votedPaslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    voters: Voter;

    @OneToMany(() => Partai, partai => partai.selectedPaslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    partai: Partai[];

}

// @CreateDateColumn({
//     type: "timestamptz",
//     default: () => "CURRENT_TIMESTAMP",
// })
// createdAt: Date;

// @CreateDateColumn({
//     type: "timestamptz",
//     default: () => "CURRENT_TIMESTAMP",
// })
// updatedAt: Date;



// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
// import { Partai } from "./Partai";
// import { Voter } from "./Voter";

// @Entity({ name: "paslons" })
// export class Paslon {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

//     @Column()
//     noUrut: number;

//     @Column()
//     visiMisi: string;

//     @Column()
//     image: string;

//     @OneToMany(() => Voter, voter => voter.votedPaslon, {
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE"
//     })
//     // @JoinColumn({ name: "voterId" })
//     voters: Voter;   //voters: Voter[];

//     @OneToMany(() => Partai, partai => partai.selectedPaslon, {
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE"
//     })
//     // @JoinColumn({ name: "partaiId" })
//     partai: Partai[];

// }
