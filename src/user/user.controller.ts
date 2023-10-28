import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Param,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const hanshedPssword = await bcrypt.hash(password, 10);

    return this.userService.create({
      username,
      password: hanshedPssword,
    });
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.userService.findOne({ username });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    return user;
  }

  @Put(':id')
  async assignTest(@Param('id') id: string, @Body('testId') testId: string) {
    return this.userService.assignTest(id, testId);
  }
}
