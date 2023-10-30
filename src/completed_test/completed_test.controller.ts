import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CompletedTestService } from './completed_test.service';
import {
  CompletedTestFromClient,
  GetTestResultDto,
} from './dto/completed_test.schema.dto';
import { UserService } from 'src/user/user.service';
import { TestService } from 'src/test/test.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('completed-test')
export class CompletedTestController {
  constructor(
    private readonly completedTestService: CompletedTestService,
    private readonly userService: UserService,
    private readonly testService: TestService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: GetTestResultDto,
    description: 'The record has been successfully created',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async create(@Body('data') data: CompletedTestFromClient) {
    if (!data) {
      throw new BadRequestException('no data provided');
    }
    const test = await this.testService.findOneTest(data.testId);
    if (!test) {
      throw new BadRequestException('wrong test id');
    }
    const score = test.questions.reduce((num, question) => {
      if (data.record[question._id] === question.correctOptionIndex) {
        num += 1;
      }
      return num;
    }, 0);
    const completedTestData = {
      testId: data.testId,
      userId: data.userId,
      title: test.title,
      score: Math.round((score / test.questions.length) * 100),
    };

    const newCompleted =
      await this.completedTestService.create(completedTestData);

    await this.userService.completeTest(
      data.userId,
      newCompleted._id,
      data.testId,
    );

    return newCompleted;
  }
}
