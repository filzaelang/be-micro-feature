import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704650319554 implements MigrationInterface {
    name = 'MyMigration1704650319554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

}
