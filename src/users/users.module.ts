import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],  // Ensure the Users entity is included
  controllers: [UsersController],
  providers: [UsersService],  // Make sure UsersService is provided here
})
export class UsersModule {}
