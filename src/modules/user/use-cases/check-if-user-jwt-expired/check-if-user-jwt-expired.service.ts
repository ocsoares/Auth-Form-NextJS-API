import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IService } from 'src/interfaces/IService';
import { CheckIfUserJwtExpiredDTO } from './dtos/CheckIfUserJwtExpiredDTO';
import { InvalidTokenException } from 'src/exceptions/auth-exceptions/invalid-token.exception';
import { IUserPayload } from 'src/modules/auth/models/IUserPayload';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class CheckIfUserJwtExpiredService implements IService {
    constructor(private readonly jwtService: JwtService) {}

    async execute({ jwt }: CheckIfUserJwtExpiredDTO): Promise<boolean> {
        try {
            this.jwtService.verify(jwt) as IUserPayload;

            return false;
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return true;
            }

            throw new InvalidTokenException();
        }
    }
}
