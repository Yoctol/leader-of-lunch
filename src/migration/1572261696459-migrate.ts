import {MigrationInterface, QueryRunner} from "typeorm";

export class migrate1572261696459 implements MigrationInterface {
    name = 'migrate1572261696459'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "channel_restaurant" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "restaurantId" integer, "channelId" integer, CONSTRAINT "PK_18d886f072fe8a412ca480a15cc" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "name" character varying NOT NULL, CONSTRAINT "UQ_9315499c5bf5ead89fbb877a0b5" UNIQUE ("name"), CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "channel_user" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "userId" integer, "channelId" integer, CONSTRAINT "PK_7e5d4007402f6c41e35003494f8" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "key" character varying NOT NULL, "name" character varying, CONSTRAINT "UQ_7b57429bcc6c6265ddd4e92f063" UNIQUE ("key"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "vote" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "optionId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "option" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "index" integer NOT NULL, "restaurantId" integer NOT NULL, "electionId" integer NOT NULL, CONSTRAINT "PK_e6090c1c6ad8962eea97abdbe63" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "election" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "channelId" integer NOT NULL, CONSTRAINT "PK_17467b9ade12257d01912737bdb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "channel" ("id" SERIAL NOT NULL, "createdAt" integer NOT NULL DEFAULT 0, "updatedAt" integer, "key" character varying NOT NULL, CONSTRAINT "UQ_fe659b0f152b4274d665e49c043" UNIQUE ("key"), CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_restaurant" ADD CONSTRAINT "FK_b6809dd201391eba6090ae3226e" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_restaurant" ADD CONSTRAINT "FK_2b84db2577917ec1ddd932974ce" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_user" ADD CONSTRAINT "FK_a34f8beb8e568f64e24abce71b6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_user" ADD CONSTRAINT "FK_3836ee173cdde32bd330bcfd81a" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_4ae2eb8e398ff87416da92ea286" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_f5de237a438d298031d11a57c3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_cb605937698405ddabd0d70f419" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_676fc375ad33708e08aba363bb3" FOREIGN KEY ("electionId") REFERENCES "election"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "election" ADD CONSTRAINT "FK_bd2f51c1c0f717c8c16f5b573e4" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "election" DROP CONSTRAINT "FK_bd2f51c1c0f717c8c16f5b573e4"`, undefined);
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_676fc375ad33708e08aba363bb3"`, undefined);
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_cb605937698405ddabd0d70f419"`, undefined);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_f5de237a438d298031d11a57c3b"`, undefined);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_4ae2eb8e398ff87416da92ea286"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_user" DROP CONSTRAINT "FK_3836ee173cdde32bd330bcfd81a"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_user" DROP CONSTRAINT "FK_a34f8beb8e568f64e24abce71b6"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_restaurant" DROP CONSTRAINT "FK_2b84db2577917ec1ddd932974ce"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel_restaurant" DROP CONSTRAINT "FK_b6809dd201391eba6090ae3226e"`, undefined);
        await queryRunner.query(`DROP TABLE "channel"`, undefined);
        await queryRunner.query(`DROP TABLE "election"`, undefined);
        await queryRunner.query(`DROP TABLE "option"`, undefined);
        await queryRunner.query(`DROP TABLE "vote"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "channel_user"`, undefined);
        await queryRunner.query(`DROP TABLE "restaurant"`, undefined);
        await queryRunner.query(`DROP TABLE "channel_restaurant"`, undefined);
    }

}
