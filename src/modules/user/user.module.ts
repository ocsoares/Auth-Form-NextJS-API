import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/create-user/create-user.controller';
import { CreateUserService } from './use-cases/create-user/create-user.service';
import { LoginUserController } from './use-cases/login-user/login-user.controller';
import { LoginUserService } from './use-cases/login-user/login-user.service';
import { JwtModule } from '@nestjs/jwt';
import { CheckIfUserJwtExpiredService } from './use-cases/check-if-user-jwt-expired/check-if-user-jwt-expired.service';
import { CheckIfUserJwtExpiredController } from './use-cases/check-if-user-jwt-expired/check-if-user-jwt-expired.controller';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRATION },
            }),
        }),
    ],
    controllers: [
        CreateUserController,
        LoginUserController,
        CheckIfUserJwtExpiredController,
    ],
    providers: [
        CreateUserService,
        LoginUserService,
        CheckIfUserJwtExpiredService,
    ],
})
export class UserModule {}
