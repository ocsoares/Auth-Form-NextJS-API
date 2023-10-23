import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';
import { rateLimiterMiddleware } from './modules/auth/middlewares/rate-limiter.middleware';
import { mw } from 'request-ip';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(mw());

    // I used this because NestJS Throttler Module doesn't work !!!
    app.use(rateLimiterMiddleware);

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    app.enableCors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
    });

    await app.listen(PORT);
}

bootstrap();
