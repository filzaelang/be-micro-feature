import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704079781774 implements MigrationInterface {
    name = 'MyMigration1704079781774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ketuaUmum" integer NOT NULL, "visiMisi" character varying NOT NULL, "alamat" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contents" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "content" character varying NOT NULL, "image" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_b7c504072e537532d7080c54fac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paslons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "noUrut" integer NOT NULL, "visiMisi" character varying NOT NULL, "image" character varying NOT NULL, "koalisi" character varying NOT NULL, CONSTRAINT "PK_fb7268cc991dfa9da1aa9c02941" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "paslons"`);
        await queryRunner.query(`DROP TABLE "contents"`);
        await queryRunner.query(`DROP TABLE "partai"`);
    }

}
