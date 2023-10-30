import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Get,
  Param,
} from '@nestjs/common';
import { TestService } from './test.service';
import {
  CreateTestDto,
  GetAssignedTests,
  GetTestDto,
} from './dto/test.schema.dto';
import { UserService } from 'src/user/user.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly userService: UserService,
  ) {}

  @Post('')
  @ApiResponse({
    status: 201,
    type: CreateTestDto,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async create(@Body('data') data: CreateTestDto) {
    if (!data) {
      throw new BadRequestException('no data provided');
    }

    return this.testService.create(data);
  }

  @Get(':userId')
  @ApiResponse({
    status: 201,
    type: GetAssignedTests,
    description: 'Tests assigned to user',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  async getTests(@Param('userId') userId: string): Promise<GetAssignedTests> {
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

  @Get('/test/:testId')
  @ApiResponse({
    status: 201,
    type: [GetTestDto],
    description: 'Test by id.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async getOneTest(@Param('testId') testId: string) {
    const test = await this.testService.findOneTest(testId);

    return test;
  }
}
