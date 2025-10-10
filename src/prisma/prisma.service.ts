import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './../../generated/prisma/index.js';

@Injectable()
export class PrismaService extends PrismaClient {
  // async onModuleInit() { await this.$connect(); }
  // async onModuleDestroy() { await this.$disconnect() }
}