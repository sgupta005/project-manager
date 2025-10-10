import { Request, Response, NextFunction } from 'express';
import connectDb from '../db/connectDb';

/**
 * Middleware to ensure database connection before processing requests
 * Critical for serverless environments like Vercel where connections
 * may not persist between invocations
 */
export const dbConnectMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectDb();
    next();
  } catch (error) {
    console.error('Database connection failed in middleware:', error);
    return res.status(503).json({
      success: false,
      message: 'Database connection failed. Please try again later.',
    });
  }
};
