import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
    @ApiProperty({ type: 'string', example: 'John' })
    @IsNotEmpty()
    @IsString()
    @Length(3)
    firstName: string;

    @ApiProperty({ type: 'string', example: 'Doe' })
    @IsNotEmpty()
    @IsString()
    @Length(3)
    lastName: string;

    @ApiProperty({ type: 'email', example: 'example@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ type: 'string', example: 'johndoe123' })
    @IsNotEmpty()
    @IsString()
    @Length(7)
    password: string;

    @ApiProperty({ type: 'string', example: 'johndoe123' })
    @IsNotEmpty()
    @IsString()
    confirmPassword: string;
}
