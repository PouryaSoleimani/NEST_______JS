import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AtriclesModule } from 'src/articles/atricles.module';



@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule { }
