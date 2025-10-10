import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
@Module({
    imports: [],
    controllers: [UsersController,],
    providers: [UsersService],
})
export class UsersModule { }
