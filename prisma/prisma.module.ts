import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService],
    exports: [PrismaModule]
})
export class PrismaModule { }
