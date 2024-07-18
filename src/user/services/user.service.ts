import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const finded = await this.userModel.findById(id);
    if (!finded) {
      throw new NotFoundException(`Usuário ${id} não encontrado`);
    }
    return finded;
  }

  create(createUserDto: CreateUserDto) {
    const coffee = new this.userModel(createUserDto);
    return coffee.save();
  }
}
