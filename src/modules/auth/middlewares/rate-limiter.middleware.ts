import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { getClientIp } from 'request-ip';

const rateLimiter = rateLimit({
    windowMs: 180000, // 3 min
    max: 10, // 7 requests every 3 min
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
