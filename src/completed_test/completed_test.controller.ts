import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CompletedTestService } from './completed_test.service';
import { CreateTestResultDto } from './dto/completed_test.schema.dto';
import { UserService } from 'src/user/user.service';

@Controller('completed-test')
export class CompletedTestController {
  constructor(
    private readonly completedTestService: CompletedTestService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(@Body('data') data: CreateTestResultDto) {
    if (!data) {
      throw new BadRequestException('no data provided');
    }

    await this.userService.completeTest(data.userId, data.testId);

    return this.completedTestService.create(data);
  }
}
