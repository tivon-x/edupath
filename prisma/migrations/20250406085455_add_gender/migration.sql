-- CreateEnum
CREATE TYPE "EnumGender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "gender" "EnumGender" NOT NULL DEFAULT 'UNKNOWN';
