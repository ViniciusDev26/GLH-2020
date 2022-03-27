/*
  Warnings:

  - A unique constraint covering the columns `[representativeId]` on the table `providers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `representative` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `representativeId` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `representative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `representative` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "payment_methods" AS ENUM ('PIX', 'CREDIT', 'DEBIT', 'CASH');

-- CreateEnum
CREATE TYPE "readjustment_forms" AS ENUM ('IPCA');

-- AlterTable
ALTER TABLE "providers" ADD COLUMN     "representativeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "representative" ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "delivery_term" (
    "id" TEXT NOT NULL,
    "total" TIMESTAMP(3) NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "frequency" INTEGER NOT NULL,

    CONSTRAINT "delivery_term_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "payment_method" "payment_methods" NOT NULL,
    "bank" INTEGER NOT NULL,
    "agency" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "PIX" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "delivery_termId" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "readjustment_form" "readjustment_forms" NOT NULL,
    "forum" TEXT NOT NULL,
    "signature_date" TIMESTAMP(3) NOT NULL,
    "validity" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_delivery_termId_key" ON "Contract"("delivery_termId");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_paymentId_key" ON "Contract"("paymentId");

-- CreateIndex
CREATE UNIQUE INDEX "providers_representativeId_key" ON "providers"("representativeId");

-- CreateIndex
CREATE UNIQUE INDEX "representative_addressId_key" ON "representative"("addressId");

-- AddForeignKey
ALTER TABLE "providers" ADD CONSTRAINT "providers_representativeId_fkey" FOREIGN KEY ("representativeId") REFERENCES "representative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "representative" ADD CONSTRAINT "representative_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_delivery_termId_fkey" FOREIGN KEY ("delivery_termId") REFERENCES "delivery_term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
