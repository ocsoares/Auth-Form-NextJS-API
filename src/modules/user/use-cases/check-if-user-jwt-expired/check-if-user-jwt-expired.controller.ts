import { Body, Controller, Post } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { CheckIfUserJwtExpiredService } from './check-if-user-jwt-expired.service';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';
import { CheckIfUserJwtExpiredDTO } from './dtos/CheckIfUserJwtExpiredDTO';

@Controller('auth')
export class CheckIfUserJwtExpiredController implements IController {
    constructor(
        private readonly checkIfUserJwtExpiredService: CheckIfUserJwtExpiredService,
    ) {}

    @IsPublic()
    @Post('check-jwt-expired')
    async handle(@Body() body: CheckIfUserJwtExpiredDTO): Promise<object> {
        const isExpiredJWT =
            await this.checkIfUserJwtExpiredService.execute(body);

        return { isExpiredJWT };
    }
}
