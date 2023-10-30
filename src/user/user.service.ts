import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { SignUpDto, UserWithTestsDto } from './dto/user.entity.dto';
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

  async findRelatedTables(
    id: string,
    property: string[],
  ): Promise<UserWithTestsDto> {
    const user = await this.userModel.findById(id);
    return user.populate(property);
  }

  async assignTest(id: string, testId: string) {
    const user = await this.userModel.findById(id);
    if (user.assignedTests.includes(testId)) {
      throw new BadRequestException('this test is already assigned');
    }
    const assignedTests = [...user.assignedTests, testId];
    return this.userModel.findByIdAndUpdate(
      id,
      { assignedTests },
      { new: true },
    );
  }
  async completeTest(id: string, completedTestId: string, testId: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.assignedTests.includes(testId)) {
      throw new NotFoundException('This test is not assigned to the user');
    }
    const updatedAssignedTests = user.assignedTests.filter((assignedTestId) => {
      return assignedTestId.toString() !== testId;
    });

    const updatedCompletedTests = [...user.completedTests, completedTestId];

    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      {
        assignedTests: updatedAssignedTests,
        completedTests: updatedCompletedTests,
      },
      { new: true },
    );

    return updatedUser;
  }
}
