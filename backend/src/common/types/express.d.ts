import * as express from "express"
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        // add other standard fields
      };
    }
  }
}