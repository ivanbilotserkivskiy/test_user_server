import { IsNotEmpty, IsDate, IsString, IsPositive } from 'class-validator';

export class CreateTestResultDto {
  @IsNotEmpty()
  @IsString()
  testId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsPositive()
  score: number;
}
export class GetTestResultDto {
  @IsNotEmpty()
  @IsString()
  testId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsPositive()
  score: number;

  @IsNotEmpty()
  @IsDate()
  dateCompleted: Date;
}
