import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';
import { mw } from 'request-ip';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // To obtain the real IP address of the request on a production server !
    app.set('trust proxy', true);

    app.use(helmet());

    app.use(mw());

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Auth Form NextJS API')
        .setDescription(
            'Uma API feita para a minha aplicação frontend chamada "Auth Form NextJS"',
        )
        .setVersion('1.0')
        .addTag('auth-user')
        .addTag('token')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);

    const server = app.getHttpAdapter();

    server.get('/', (req: Request, res: Response) => {
        res.redirect('/docs');
    });

    app.enableCors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
    });

    await app.listen(PORT);
}

bootstrap();
