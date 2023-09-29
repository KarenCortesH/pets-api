import { Request, Response, NextFunction } from "express";

export const authorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', Date.now());
    next();
}
