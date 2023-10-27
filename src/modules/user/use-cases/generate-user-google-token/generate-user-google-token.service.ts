import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { GenerateUserGoogleTokenDTO } from './dtos/GenerateUserGoogleTokenDTO';
import { OAuth2Client } from 'google-auth-library';
import { InvalidTokenException } from 'src/exceptions/auth-exceptions/invalid-token.exception';
import { JwtService } from '@nestjs/jwt';
import { IGoogleJWT } from './interfaces/IGoogleJWT';

@Injectable()
export class GenerateUserGoogleTokenService implements IService {
    constructor(private readonly jwtService: JwtService) {}

    async execute({ googleJWT }: GenerateUserGoogleTokenDTO): Promise<string> {
        try {
            const clientOAuth2 = new OAuth2Client({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            });

            const token = await clientOAuth2.verifyIdToken({
                idToken: googleJWT,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const {
                email,
                email_verified,
                given_name,
                iss,
                locale,
                name,
                picture,
            } = token.getPayload();

            const jwtPayload: IGoogleJWT = {
                iss,
                email,
                email_verified,
                name,
                picture,
                given_name,
                locale,
            };

            const generatedGoogleJWT = this.jwtService.sign(jwtPayload);

            return generatedGoogleJWT;
        } catch (error) {
            throw new InvalidTokenException();
        }
    }
}
