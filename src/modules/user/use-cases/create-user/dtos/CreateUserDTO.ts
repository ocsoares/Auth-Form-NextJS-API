import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(4)
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @Length(4)
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(7)
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;
}
