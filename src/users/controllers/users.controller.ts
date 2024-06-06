import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('hello')
  getHello(): string {
    return this.userService.getHello();
  }
}
