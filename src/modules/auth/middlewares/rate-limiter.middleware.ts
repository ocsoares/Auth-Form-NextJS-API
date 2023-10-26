import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { getClientIp } from 'request-ip';

const rateLimiter = rateLimit({
    windowMs: 240000, // 4 min
    max: 16, // 16 requests every 4 min
    message: {
        message: 'You have sent too many requests. Try again later.',
        error: 'Too Many Request',
        statusCode: 429,
    },
    keyGenerator: (req) => getClientIp(req),
});

export const rateLimiterMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    rateLimiter(req, res, next);
};
