import { Request, Response } from 'express';
import { create, findUser } from '../services/user-service.js';
import { handleError } from '../utils/error-handler.js';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, name } = req.body;
        const newUser = await create({ email, name });
        res.status(201).json(newUser);
    } catch (error) {
        handleError(error, res);
    }
};

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await findUser(req.params.id);
        res.status(200).json(user);
    } catch (error: any) {
        handleError(error, res);
    }
};
