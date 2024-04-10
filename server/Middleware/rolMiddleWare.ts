import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./verifyToken";

export const authRol = (reqRol: string[]) =>  (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization?.split(' ')[1];
    try {
        const dataToken: any = verifyToken(authToken)
        const rolUser = dataToken.rol;
        const rolesByUser = rolUser;
        const checkValueRol = reqRol.some((rolSingle) => rolesByUser.includes(rolSingle));
        if (!checkValueRol) {
            return res.status(401).send({ error: 'You do not have access' });
        }
    } catch (error) {
        return res.status(401).send({ error: 'Fail Middleware' });
    }
    next();
};