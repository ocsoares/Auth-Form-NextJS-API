import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { UserAlreadyExistsByEmailException } from 'src/exceptions/user-exceptions/user-already-exists-by-email.exception';
import { IUser } from 'src/models/IUser';
import { EncryptPasswordHelper } from 'src/helpers/encrypt-password.helper';
import { ErrorCreatingUserException } from 'src/exceptions/user-exceptions/error-creating-user.exception';
import { UserPasswordDoNotMatchException } from 'src/exceptions/user-exceptions/user-password-do-not-match.exception';

@Injectable()
export class CreateUserService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }: CreateUserDTO): Promise<IUser> {
        const userAlreadyExistsByEmail =
            await this.userRepository.findByEmail(email);

        if (userAlreadyExistsByEmail) {
            throw new UserAlreadyExistsByEmailException();
        }

        if (password !== confirmPassword) {
            throw new UserPasswordDoNotMatchException();
        }

        const createdUser = await this.userRepository.create({
            firstName,
            lastName,
            email,
            password: await EncryptPasswordHelper.bcryptEncrypt(password, 10),
        });

        if (!createdUser) {
            throw new ErrorCreatingUserException();
        }

        return createdUser;
    }
}
