import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "articles" })
export class Artikel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    article: string;

    @Column()
    image: string;

    @CreateDateColumn({ type: "timestamptz" })
    date: Date;

    @ManyToOne(() => User, (user) => user.articles)
    user: User;

}

