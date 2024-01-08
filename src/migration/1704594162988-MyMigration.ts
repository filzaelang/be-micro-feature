import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704594162988 implements MigrationInterface {
    name = 'MyMigration1704594162988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "voters" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, "alamat" character varying NOT NULL, "jenisKelamin" character varying NOT NULL, "paslon" character varying NOT NULL, CONSTRAINT "PK_a58842a42a7c48bc3efebb0a305" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "voters"`);
    }

}
