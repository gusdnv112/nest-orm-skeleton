import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request } from "supertest";

export class dummy2Middleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("request");
        next();
    }
}