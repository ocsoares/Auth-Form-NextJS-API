import { Body, Controller, Post } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';
import { GenerateUserGithubTokenService } from './generate-user-github-token.service';
import { GenerateUserGitHubTokenDTO } from './dtos/dtos/GenerateUserGitHubTokenDTO';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiTags,
    ApiTooManyRequestsResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class GenerateUserGithubTokenController implements IController {
    constructor(
        private readonly generateUserGithubTokenService: GenerateUserGithubTokenService,
    ) {}

    @ApiTags('token-user')
    @ApiBadRequestResponse()
    @ApiUnauthorizedResponse()
    @ApiCreatedResponse()
    @ApiTooManyRequestsResponse()
    @IsPublic()
    @Post('generate-user-github-token')
    async handle(@Body() body: GenerateUserGitHubTokenDTO): Promise<object> {
        const jwt = await this.generateUserGithubTokenService.execute(body);

        return { jwt };
    }
}
