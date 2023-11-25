import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { CheckIfUserJwtExpiredDTO } from './dtos/CheckIfUserJwtExpiredDTO';
import { InvalidTokenException } from 'src/exceptions/auth-exceptions/invalid-token.exception';
import { TokenExpiredError } from 'jsonwebtoken';
import { TokenManager } from 'src/cryptography/abstracts/token-manager';

@Injectable()
export class CheckIfUserJwtExpiredService implements IService {
    constructor(private readonly tokenManager: TokenManager) {}

    async execute({ jwt }: CheckIfUserJwtExpiredDTO): Promise<boolean> {
        try {
            await this.tokenManager.verify(jwt);

            return false;
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return true;
            }

            throw new InvalidTokenException();
        }
    }
}
