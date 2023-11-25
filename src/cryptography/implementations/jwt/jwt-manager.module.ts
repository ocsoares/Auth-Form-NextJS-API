import { Global, Module } from '@nestjs/common';
import { TokenManager } from 'src/cryptography/abstracts/token-manager';
import { JwtManager } from './jwt-manager';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRATION },
            }),
        }),
    ],
    providers: [
        {
            provide: TokenManager,
            useClass: JwtManager,
        },
    ],
    exports: [TokenManager],
})
export class JwtManagerModule {}
