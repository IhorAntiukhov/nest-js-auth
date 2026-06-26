import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    name: 'Content',
    maxLength: 500,
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  content!: string;

  @ApiProperty({
    name: 'Parent ID',
    type: 'number',
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  parentId?: number;
}
