import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { ApiResponse } from '@nestjs/swagger';
import { LoginDto, SignUpDto } from './dto/user.entity.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiResponse({
    type: SignUpDto,
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
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

  @Put(':id')
  @ApiResponse({
    status: 201,
    type: LoginDto,
    description: 'The record has been successfully created.',
  })
  async assignTest(@Param('id') id: string, @Body('testId') testId: string) {
    return this.userService.assignTest(id, testId);
  }
}
