import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Paslon } from "./Paslon"
import { User } from "./User"

@Entity({ name: "voters" })
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, user => user.voter, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "userId" })
    user: User

    @ManyToOne(() => Paslon, (paslon) => paslon.voters, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    votedPaslon: Paslon
}



// @Entity({ name: "voters" })
// export class Voter {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     nama: string

//     @Column()
//     alamat: string

//     @Column()
//     jenisKelamin: string

//     @ManyToOne(() => Paslon, paslon => paslon.voters)
//     votedPaslon: Paslon;

//     @OneToMany(() => User, user => user.voter)
//     @JoinColumn({ name: "userId" })
//     user: User;

//     @CreateDateColumn({
//         type: "timestamptz",
//         default: () => "CURRENT_TIMESTAMP",
//     })
//     createdAt: Date;

//     @CreateDateColumn({
//         type: "timestamptz",
//         default: () => "CURRENT_TIMESTAMP",
//     })
//     updatedAt: Date;
// }