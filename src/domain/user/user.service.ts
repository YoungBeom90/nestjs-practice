import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export class CreateUserVo {
  id: string;
  name: string;
  birth: Date;
  phone: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id
      }
    });
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(vo: CreateUserVo) {
    const saved = await this.userRepository.save(User.create(vo));
    if (saved) {
      console.log((saved));
      return true;
    }
    return false;
  }
}
