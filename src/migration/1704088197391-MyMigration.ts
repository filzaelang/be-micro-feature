import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704088197391 implements MigrationInterface {
    name = 'MyMigration1704088197391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "ketuaUmum"`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "ketuaUmum" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "ketuaUmum"`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "ketuaUmum" integer NOT NULL`);
    }

}
