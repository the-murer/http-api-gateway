import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('coffees')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Post()
  create(@Body() createCoffeDto: CreateUserDto) {
    return this.userService.create(createCoffeDto);
  }
}
