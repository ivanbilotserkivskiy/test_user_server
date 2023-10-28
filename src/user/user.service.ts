import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/user.entity.dto';
import { User } from './schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(data: SignUpDto): Promise<SignUpDto> {
    const createUser = new this.userModel(data);
    return createUser.save();
  }
  async findOne(conditions: any): Promise<User> {
    return this.userModel.findOne(conditions).exec();
  }

  async findRelatedTables(id: string, property: string[]): Promise<User> {
    return this.userModel.findById(id).populate(property).exec();
  }

  async assignTest(id: string, testId: string) {
    const user = await this.userModel.findById(id);
    if (user.assignedTests.includes(testId)) {
      throw new BadRequestException('this test is already assigned');
    }
    const assignedTests = [...user.assignedTests, testId];
    return this.userModel.findByIdAndUpdate(id, { assignedTests });
  }
  async completeTest(id: string, testId: string) {
    const user = await this.userModel.findById(id);
    if (user.completedTests.includes(testId)) {
      throw new BadRequestException('this test is already in completed');
    }
    const completedTests = [...user.completedTests, testId];

    return this.userModel.findByIdAndUpdate(id, { completedTests });
  }
}
