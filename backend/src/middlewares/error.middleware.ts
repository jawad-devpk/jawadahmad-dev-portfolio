import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode = 500) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function notFoundMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404));
}

export function errorMiddleware(
  error: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = error instanceof AppError ? error.statusCode : 500;

  if (env.NODE_ENV === "development") {
    console.error("Backend error:");
    console.error(error);
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal server error" : error.message,
  });
}
