import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704083087412 implements MigrationInterface {
    name = 'MyMigration1704083087412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "contents" ADD "date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "contents" ADD "date" TIMESTAMP NOT NULL`);
    }

}
