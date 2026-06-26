import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { SignInDto } from './sign-in.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto extends SignInDto {
  @ApiProperty({
    name: 'User name',
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;
}
