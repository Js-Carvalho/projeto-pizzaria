/*
  Warnings:

  - Changed the type of `preco` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "preco",
ADD COLUMN     "preco" DECIMAL(65,30) NOT NULL;
