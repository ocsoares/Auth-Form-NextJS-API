import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestBody {
    @ApiProperty({ type: 'email', example: 'example@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ type: 'string', example: 'example123' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ type: 'boolean', example: false })
    @IsNotEmpty()
    @IsBoolean()
    remember: boolean;
}
