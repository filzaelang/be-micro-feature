import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Paslon } from "./Paslon";

@Entity({ name: "partai" })
export class Partai {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;  // Nama Partai

    @Column()
    ketuaUmum: string;

    @Column()                      //@Column("simple-array")
    visiMisi: string;

    @Column()
    alamat: string;

    @Column({ nullable: true })
    image: string;

    @ManyToOne(() => Paslon, paslon => paslon.partai)
    @JoinColumn({ name: "selectedPaslonId" })
    selectedPaslon: Paslon;

}
