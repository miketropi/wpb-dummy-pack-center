import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const purchase_code = req.headers.purchase_code as string;

  if (!purchase_code) {
    return res.status(401).json({ message: 'Invalid purchase code' });
  }

  next();
};
