import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    name: 'Email',
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @IsEmail()
  @MaxLength(50)
  email!: string;

  @ApiProperty({
    name: 'Password',
    minLength: 6,
    maxLength: 20,
    type: 'string',
  })
  @IsString()
  @Length(6, 20)
  password!: string;
}
