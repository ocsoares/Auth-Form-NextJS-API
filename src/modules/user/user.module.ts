import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CreateUserController } from './use-cases/create-user/create-user.controller';
import { CreateUserService } from './use-cases/create-user/create-user.service';
import { LoginUserController } from './use-cases/login-user/login-user.controller';
import { LoginUserService } from './use-cases/login-user/login-user.service';
import { CheckIfUserJwtExpiredService } from './use-cases/check-if-user-jwt-expired/check-if-user-jwt-expired.service';
import { CheckIfUserJwtExpiredController } from './use-cases/check-if-user-jwt-expired/check-if-user-jwt-expired.controller';
import { GenerateUserGoogleTokenController } from './use-cases/generate-user-google-token/generate-user-google-token.controller';
import { GenerateUserGoogleTokenService } from './use-cases/generate-user-google-token/generate-user-google-token.service';
import { GenerateUserGithubTokenService } from './use-cases/generate-user-github-token/generate-user-github-token.service';
import { GenerateUserGithubTokenController } from './use-cases/generate-user-github-token/generate-user-github-token.controller';
import { HttpModule } from '@nestjs/axios';
import { rateLimiterMiddleware } from '../auth/middlewares/rate-limiter.middleware';

@Module({
    imports: [HttpModule],
    controllers: [
        CreateUserController,
        LoginUserController,
        CheckIfUserJwtExpiredController,
        GenerateUserGoogleTokenController,
        GenerateUserGithubTokenController,
    ],
    providers: [
        CreateUserService,
        LoginUserService,
        CheckIfUserJwtExpiredService,
        GenerateUserGoogleTokenService,
        GenerateUserGithubTokenService,
    ],
})
export class UserModule implements NestModule {
    // I used this because NestJS Throttler Module doesn't work !!!
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(rateLimiterMiddleware).forRoutes('auth/*');
    }
}
