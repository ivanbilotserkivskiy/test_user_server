import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CompletedTest } from './schemas/completed_test.schema';
import { CreateTestResultDto } from './dto/completed_test.schema.dto';

@Injectable()
export class CompletedTestService {
  constructor(
    @Inject('COMPLETED_TEST_MODEL')
    private readonly completedTestModel: Model<CompletedTest>,
  ) {}

  async create(data: CreateTestResultDto): Promise<CompletedTest> {
    const createTestResult = new this.completedTestModel(data);

    return createTestResult.save();
  }

  async find() {
    const table = await this.completedTestModel.find({}, 'testId');
    return table;
  }
}
