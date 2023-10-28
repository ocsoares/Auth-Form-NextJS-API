import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserWithoutPassword } from 'src/models/IUserWithoutPassword';
import { IService } from 'src/interfaces/IService';
import { IUserPayload } from 'src/modules/auth/models/IUserPayload';
import { IReturnUser } from 'src/interfaces/IReturnUser';

interface IReturnLogin extends IReturnUser {
    jwt: string;
}

@Injectable()
export class LoginUserService implements IService {
    constructor(private readonly jwtService: JwtService) {}

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
            this.jwt = this.jwtService.sign(payload, { expiresIn: '48h' });
        } else {
            this.jwt = this.jwtService.sign(payload);
        }

        return {
            firstName,
            lastName,
            email,
            jwt: this.jwt,
        };
    }
}
