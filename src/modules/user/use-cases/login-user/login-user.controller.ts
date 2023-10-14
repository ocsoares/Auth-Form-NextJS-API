import {
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

@Controller('auth')
export class LoginUserController implements IController {
    constructor(private readonly _loginUserService: LoginUserService) {}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    async handle(@Request() req: IAuthRequest): Promise<object> {
        const data = await this._loginUserService.execute(req.user);

        return {
            ...data,
        };
    }
}
