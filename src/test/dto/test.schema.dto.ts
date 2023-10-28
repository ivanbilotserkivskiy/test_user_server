import { IsNotEmpty, IsString, IsArray } from 'class-validator';

interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export class CreateTestDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsArray()
  questions: Question[];
}

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
