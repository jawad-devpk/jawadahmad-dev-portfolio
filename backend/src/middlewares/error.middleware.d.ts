import type { NextFunction, Request, Response } from "express";
export declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode?: number);
}
export declare function notFoundMiddleware(req: Request, _res: Response, next: NextFunction): void;
export declare function errorMiddleware(error: Error | AppError, _req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=error.middleware.d.ts.map