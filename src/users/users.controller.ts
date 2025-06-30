import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('data')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}  // Correctly injecting UsersService

  @Post()
  async create(@Body() body: Partial<Users>) {
    return this.usersService.create(body);
  }

 @Post('more_data')
  async insertData(@Body() data: any[]): Promise<Users[]> {
    return this.usersService.insertBulk(data);
  }

  @Get('display_data')
  async display() {
    return this.usersService.getAllUsers();  // Make sure this method is available in UsersService
  }

    @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.delete(id);
  }
}
