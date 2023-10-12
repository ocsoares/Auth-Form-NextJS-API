import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserWithoutPassword } from 'src/models/IUserWithoutPassword';
import { IService } from 'src/interfaces/IService';
import { IUserPayload } from 'src/modules/auth/models/IUserPayload';
import { IReturnUser } from 'src/interfaces/IReturnUser';

interface IReturnLogin {
    user: IReturnUser;
    jwt: string;
}

@Injectable()
export class LoginUserService implements IService {
    constructor(private readonly jwtService: JwtService) {}

    async execute({
        id,
        firstName,
        lastName,
        email,
    }: IUserWithoutPassword): Promise<IReturnLogin> {
        const payload: IUserPayload = {
            sub: id,
            firstName,
            lastName,
            email,
        };

        const jwt = this.jwtService.sign(payload);

        return {
            user: {
                firstName,
                lastName,
                email,
            },
            jwt,
        };
    }
}
