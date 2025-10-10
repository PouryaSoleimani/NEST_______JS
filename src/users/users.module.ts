import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
@Module({
    imports: [],
    controllers: [UsersController,],
    providers: [],
})
export class UsersModule { }
