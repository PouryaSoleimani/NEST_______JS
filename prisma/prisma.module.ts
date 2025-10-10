import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService,],
})
export class PrismaModule { }
