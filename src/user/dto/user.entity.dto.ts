import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { GetTestResultDto } from 'src/completed_test/dto/completed_test.schema.dto';
import { GetTestDto } from 'src/test/dto/test.schema.dto';

export class SignInDto {
  @ApiProperty({
    description: 'An user username',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User password',
  })
  password: string;
}

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User main parametr, will be used in login',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User password',
  })
  password: string;
}

export class UserWithTestsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User id',
  })
  _id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User usernam',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User password',
  })
  password: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: 'User assigned tests',
  })
  assignedTests: GetTestDto[];
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    type: [GetTestResultDto],
    description: 'User completed tests',
  })
  completedTests: GetTestResultDto[];
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'access token',
  })
  access_token: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'userId token',
  })
  userId: string;
}
