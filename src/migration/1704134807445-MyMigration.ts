import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704134807445 implements MigrationInterface {
    name = 'MyMigration1704134807445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "alamat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "jenisKelamin" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "jenisKelamin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "alamat"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
    }

}
