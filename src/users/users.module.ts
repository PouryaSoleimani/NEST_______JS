import { PrismaService } from 'prisma/prisma.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from 'prisma/prisma.module';
@Module({
    imports: [PrismaModule],
    controllers: [UsersController,],
    providers: [PrismaService, UsersService],
})
export class UsersModule { }
