import { Injectable } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { GenerateUserGitHubTokenDTO } from './dtos/dtos/GenerateUserGitHubTokenDTO';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { InvalidTokenException } from 'src/exceptions/auth-exceptions/invalid-token.exception';
import { IGitHubJWT } from './interfaces/IGitHubJWT';
import { TokenManager } from 'src/cryptography/abstracts/token-manager';

@Injectable()
export class GenerateUserGithubTokenService implements IService {
    constructor(
        private readonly httpService: HttpService,
        private readonly tokenManager: TokenManager,
    ) {}

    async execute({
        githubToken,
    }: GenerateUserGitHubTokenDTO): Promise<string> {
        try {
            const token = (await this.httpService.axiosRef.get(
                'https://api.github.com/user',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `bearer ${githubToken}`,
                    },
                },
            )) as AxiosResponse<IGitHubJWT>;

            const {
                data: { id, login, html_url, name, location, email, bio },
            } = token;

            const jwtPayload: IGitHubJWT = {
                id,
                login,
                html_url,
                name,
                location,
                email,
                bio,
            };

            const generatedGitHubJWT =
                await this.tokenManager.generate(jwtPayload);

            return generatedGitHubJWT;
        } catch (error) {
            throw new InvalidTokenException();
        }
    }
}
