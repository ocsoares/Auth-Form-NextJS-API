import { Injectable } from '@nestjs/common';
import { IUserWithoutPassword } from 'src/models/IUserWithoutPassword';
import { IService } from 'src/interfaces/IService';
import { IUserPayload } from 'src/modules/auth/models/IUserPayload';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { TokenManager } from 'src/cryptography/abstracts/token-manager';

interface IReturnLogin extends IReturnUser {
    jwt: string;
}

@Injectable()
export class LoginUserService implements IService {
    constructor(private readonly tokenManager: TokenManager) {}

    private jwt: string;

    async execute({
        id,
        firstName,
        lastName,
        email,
        remember,
    }: IUserWithoutPassword & { remember: boolean }): Promise<IReturnLogin> {
        const payload: IUserPayload = {
            sub: id,
            firstName,
            lastName,
            email,
        };

        if (remember) {
            this.jwt = await this.tokenManager.generate(payload, '48h');
        } else {
            this.jwt = await this.tokenManager.generate(payload);
        }

        return {
            firstName,
            lastName,
            email,
            jwt: this.jwt,
        };
    }
}
