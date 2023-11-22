import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { UserAlreadyExistsByEmailException } from 'src/exceptions/user-exceptions/user-already-exists-by-email.exception';
import { ErrorCreatingUserException } from 'src/exceptions/user-exceptions/error-creating-user.exception';
import { UserPasswordDoNotMatchException } from 'src/exceptions/user-exceptions/user-password-do-not-match.exception';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { PasswordHasher } from 'src/cryptography/abstracts/password-hasher';

@Injectable()
export class CreateUserService implements IService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordHasher: PasswordHasher,
    ) {}

    async execute({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }: CreateUserDTO): Promise<IReturnUser> {
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
            password: await this.passwordHasher.hash(password, 10),
        });

        if (!createdUser) {
            throw new ErrorCreatingUserException();
        }

        return {
            firstName,
            lastName,
            email,
        };
    }
}
