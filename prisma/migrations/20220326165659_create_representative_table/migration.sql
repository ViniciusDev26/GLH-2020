/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `providers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `providers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `providers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "providers" DROP CONSTRAINT "providers_addressId_fkey";

-- AlterTable
ALTER TABLE "providers" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "representative" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "representative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "representative_cpf_key" ON "representative"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "representative_rg_key" ON "representative"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "representative_email_key" ON "representative"("email");

-- CreateIndex
CREATE UNIQUE INDEX "providers_email_key" ON "providers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "providers_addressId_key" ON "providers"("addressId");

-- AddForeignKey
ALTER TABLE "providers" ADD CONSTRAINT "providers_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
