import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704087989536 implements MigrationInterface {
    name = 'MyMigration1704087989536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "ketuaUmum"`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "ketuaUmum" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "ketuaUmum"`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "ketuaUmum" integer NOT NULL`);
    }

}
