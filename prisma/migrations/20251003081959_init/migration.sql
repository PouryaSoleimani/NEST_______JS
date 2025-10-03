-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');
-- CreateEnum
CREATE TYPE "public"."ProductEnum" AS ENUM ('SHOES', 'BAGS', 'T_SHIRTS', 'PANTS');
-- CreateEnum
CREATE TYPE "public"."GenderEnum" AS ENUM ('MALE', 'FEMALE');
-- CreateEnum
CREATE TYPE "public"."CategoryEnum" AS ENUM ('SPORT', 'CLASSIC', 'CASUAL', 'FASHION');
-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL DEFAULT ' ali',
    "last_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL DEFAULT 'MALE',
    "age" INTEGER NOT NULL DEFAULT 18,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'TITLE',
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "relativeCode" TEXT NOT NULL,
    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'UNKNOW PRODUCT',
    "price" INTEGER,
    "age" INTEGER DEFAULT 18,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "public"."ProductEnum" NOT NULL,
    "gender" "public"."GenderEnum" NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "category" "public"."CategoryEnum" NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
-- CreateIndex
CREATE UNIQUE INDEX "Category_relativeCode_key" ON "public"."Category"("relativeCode");
-