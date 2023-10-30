import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, IsPositive } from 'class-validator';
import { GetTestResultDto } from 'src/completed_test/dto/completed_test.schema.dto';
class QuestionCreate {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Question',
  })
  question: string;
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'Array of options',
  })
  options: string[];
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'Correct answer index',
  })
  correctOptionIndex: number;
}
class QuestionGet {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Question id',
  })
  _id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Question',
  })
  question: string;
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'Array of options',
  })
  options: string[];
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'Correct answer index',
  })
  correctOptionIndex: number;
}
export class CreateTestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Test title',
  })
  title: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'Array of questions',
    type: [QuestionCreate],
  })
  questions: QuestionCreate[];
}

export class GetTestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Test title',
    type: String,
  })
  title: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'Array of questions',
    type: [QuestionGet],
  })
  questions: QuestionGet[];
}

export class GetAssignedTests {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'assigned tests',
    type: [GetTestDto],
  })
  assignedTests: GetTestDto[];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    type: [GetTestResultDto],
    description: 'completed user tests',
  })
  completedTests: GetTestResultDto[];
}
