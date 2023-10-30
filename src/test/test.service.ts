import { Injectable, Inject } from '@nestjs/common';
import { Test } from './schemas/test.schema';
import { Model } from 'mongoose';
import { CreateTestDto, GetTestDto } from './dto/test.schema.dto';

@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_MODEL')
    private readonly testModel: Model<Test>,
  ) {}

  async create(data: CreateTestDto): Promise<CreateTestDto> {
    const createTest = new this.testModel(data);
    return createTest.save();
  }

  async findByCondition(condition: any): Promise<CreateTestDto[]> {
    const test = this.testModel.find(condition);
    return test;
  }
  async findOneTest(id: string): Promise<GetTestDto> {
    const test = this.testModel.findById(id);

    return test;
  }
}
