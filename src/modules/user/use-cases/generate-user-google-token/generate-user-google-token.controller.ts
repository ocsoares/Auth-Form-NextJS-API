import { Body, Controller, Post } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { GenerateUserGoogleTokenService } from './generate-user-google-token.service';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';
import { GenerateUserGoogleTokenDTO } from './dtos/GenerateUserGoogleTokenDTO';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiTags,
    ApiTooManyRequestsResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class GenerateUserGoogleTokenController implements IController {
    constructor(
        private readonly generateUserGoogleTokenService: GenerateUserGoogleTokenService,
    ) {}

    @ApiTags('token-user')
    @ApiBadRequestResponse()
    @ApiUnauthorizedResponse()
    @ApiCreatedResponse()
    @ApiTooManyRequestsResponse()
    @IsPublic()
    @Post('generate-user-google-token')
    async handle(@Body() body: GenerateUserGoogleTokenDTO): Promise<object> {
        const jwt = await this.generateUserGoogleTokenService.execute(body);

        return { jwt };
    }
}
