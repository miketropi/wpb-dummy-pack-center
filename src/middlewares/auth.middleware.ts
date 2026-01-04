import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const license_key = req.headers.license_key as string;
  
  if (!license_key) {
    return res.status(401).json({ message: 'Invalid license key' });
  }

  next();
};
