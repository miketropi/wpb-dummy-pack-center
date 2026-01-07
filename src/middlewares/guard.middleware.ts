import { NextFunction, Request, Response } from 'express';
import { authMiddleware } from './auth.middleware';
import { Package } from '../types/themes';

export const guardMiddleware = (req: Request & { package?: Package }, res: Response, next: NextFunction) => {
  const $package = req.package;

  if ($package?.locked) {
    return res.status(401).json({ error: 'Package is locked' });
  }

  if ($package?.free) {
    return next();
  }

  return authMiddleware(req, res, next);
}