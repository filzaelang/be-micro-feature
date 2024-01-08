import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704331057592 implements MigrationInterface {
    name = 'MyMigration1704331057592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vote" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, "alamat" character varying NOT NULL, "jenisKelamin" character varying NOT NULL, "paslon" character varying NOT NULL, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vote"`);
    }

}
