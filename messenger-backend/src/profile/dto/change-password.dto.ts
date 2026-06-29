import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    name: 'Current password',
    minLength: 6,
    maxLength: 20,
    type: 'string',
  })
  @IsString()
  @Length(6, 20)
  currentPassword!: string;

  @ApiProperty({
    name: 'New password',
    minLength: 6,
    maxLength: 20,
    type: 'string',
  })
  @IsString()
  @Length(6, 20)
  newPassword!: string;
}
