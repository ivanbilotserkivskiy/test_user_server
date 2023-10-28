import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Get,
  Param,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/test.schema.dto';
import { UserService } from 'src/user/user.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(@Body('data') data: CreateTestDto) {
    if (!data) {
      throw new BadRequestException('no data provided');
    }

    return this.testService.create(data);
  }

  @Get(':userId')
  async getTests(@Param('userId') userId: string) {
    if (!userId) {
      throw new BadRequestException('no user id provided');
    }

    const tests = await this.userService.findRelatedTables(userId, [
      'assignedTests',
      'completedTests',
    ]);

    return {
      assignedTests: tests.assignedTests,
      completedTests: tests.completedTests,
    };
  }
}
