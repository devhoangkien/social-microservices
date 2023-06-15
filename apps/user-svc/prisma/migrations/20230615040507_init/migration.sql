-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role_id" SET DEFAULT 1,
ALTER COLUMN "refresh_tokens_id" DROP NOT NULL,
ALTER COLUMN "refresh_tokens_id" SET DEFAULT '';
