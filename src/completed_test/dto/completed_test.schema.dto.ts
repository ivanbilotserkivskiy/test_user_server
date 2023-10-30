import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString, IsPositive } from 'class-validator';

export class CreateTestResultDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Completed test id',
  })
  testId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'id of the user who passed the test',
  })
  userId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Test title',
  })
  title: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'Test Mark',
  })
  score: number;
}
export class GetTestResultDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Test Id',
  })
  testId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User Id',
  })
  userId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Test Title',
  })
  title: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'User mark for the test',
  })
  score: number;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    description: 'Date when user has completed test',
  })
  dateCompleted: Date;
}

export class CompletedTestFromClient {
  @IsNotEmpty()
  @IsString()
  testId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  record: {
    [key: string]: number;
  };
}
