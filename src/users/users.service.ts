import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  cornerRepository: any;
  create(body: Partial<Users>) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,  // Injecting the repository
  ) {}

  // Method to fetch all users from the database
  async getAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();  // Fetch all users from the database
  }

  async insertBulk(data: any[]): Promise<Users[]> {
    const users = data.map(([corner, lat, long]) => {
      const newUser = new Users();
      newUser.corner = corner;
      newUser.lat = parseFloat(lat);
      newUser.long = parseFloat(long);
      return newUser;
    });
    return this.usersRepository.save(users);
  }


   async more_data(user: Partial<Users>): Promise<Users> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
  async delete(id: number): Promise<void> {
    await this.usersRepository.softDelete(id);
  }


}
