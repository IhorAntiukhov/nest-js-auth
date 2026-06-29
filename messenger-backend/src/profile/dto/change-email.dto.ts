import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength } from 'class-validator';

export class ChangeEmailDto {
  @ApiProperty({
    name: 'New email',
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @IsEmail()
  @MaxLength(50)
  newEmail!: string;
}
