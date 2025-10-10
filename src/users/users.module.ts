import { PrismaService } from 'prisma/prisma.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
@Module({
    imports: [],
    controllers: [UsersController,],
    providers: [PrismaService],
})
export class UsersModule { }
