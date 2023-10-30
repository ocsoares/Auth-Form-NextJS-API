import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { LocalAuthGuard } from '../../../auth/guards/local-auth.guard';
import { IAuthRequest } from 'src/modules/auth/types/IAuthRequest';
import { LoginUserService } from './login-user.service';
import { IsPublic } from '../../../auth/decorators/is-public.decorator';
import { LoginRequestBody } from 'src/modules/auth/models/LoginRequestBody';
import {
    ApiBadRequestResponse,
    ApiOkResponse,
    ApiTags,
    ApiTooManyRequestsResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class LoginUserController implements IController {
    constructor(private readonly _loginUserService: LoginUserService) {}

    @ApiTags('auth-user')
    @ApiBadRequestResponse()
    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiTooManyRequestsResponse()
    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    async handle(
        @Request() req: IAuthRequest,
        @Body() { remember }: LoginRequestBody,
    ): Promise<object> {
        const data = await this._loginUserService.execute({
            ...req.user,
            remember,
        });

        return {
            ...data,
        };
    }
}
