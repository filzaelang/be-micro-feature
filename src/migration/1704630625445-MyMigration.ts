import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704630625445 implements MigrationInterface {
    name = 'MyMigration1704630625445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voters" RENAME COLUMN "paslon" TO "votedPaslonId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "voterId" integer`);
        await queryRunner.query(`ALTER TABLE "partai" ADD "selectedPaslonId" integer`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "votedPaslonId"`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "votedPaslonId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6ae25ead991d6e666690e51241a" FOREIGN KEY ("voterId") REFERENCES "voters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0" FOREIGN KEY ("votedPaslonId") REFERENCES "paslons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partai" ADD CONSTRAINT "FK_d209d78c62b18e06e7905eb50cd" FOREIGN KEY ("selectedPaslonId") REFERENCES "paslons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partai" DROP CONSTRAINT "FK_d209d78c62b18e06e7905eb50cd"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_5ec70ea6d3e364204749e914fa0"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6ae25ead991d6e666690e51241a"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP COLUMN "votedPaslonId"`);
        await queryRunner.query(`ALTER TABLE "voters" ADD "votedPaslonId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "partai" DROP COLUMN "selectedPaslonId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "voterId"`);
        await queryRunner.query(`ALTER TABLE "voters" RENAME COLUMN "votedPaslonId" TO "paslon"`);
    }

}
