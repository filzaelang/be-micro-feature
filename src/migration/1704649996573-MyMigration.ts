import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704649996573 implements MigrationInterface {
    name = 'MyMigration1704649996573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6ae25ead991d6e666690e51241a"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_a9d18538b896fe2a6762e143bea"`);
        await queryRunner.query(`ALTER TABLE "paslons" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "paslons" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "nama"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "alamat"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "jenisKelamin"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "voterId"`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "UQ_18fe28e13757e8e149dfd8f7faa" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0" FOREIGN KEY ("votedPaslonId") REFERENCES "paslons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_a9d18538b896fe2a6762e143bea" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_a9d18538b896fe2a6762e143bea"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "UQ_18fe28e13757e8e149dfd8f7faa"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "voterId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "jenisKelamin" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "alamat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "nama" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paslons" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "paslons" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_a9d18538b896fe2a6762e143bea" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6ae25ead991d6e666690e51241a" FOREIGN KEY ("voterId") REFERENCES "voters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0" FOREIGN KEY ("votedPaslonId") REFERENCES "paslons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
