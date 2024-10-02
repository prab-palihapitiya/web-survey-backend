import { Request, Response } from 'express';
import { create, deleteById, findById, findByUser, updateById } from "../services/template-service.js";
import { handleError } from "../utils/error-handler.js";

export const createTemplate = async (req: Request, res: Response) => {
    try {
        const { name, obj, userId } = req.body;
        console.log('createTemplate:', name, obj, userId);

        const newTemplate = await create({ name, obj, userId });
        res.status(201).json(newTemplate);
    } catch (error) {
        handleError(error, res);
    }
}

export const updateTemplateById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { name, obj } = req.body;
        const updatedTemplate = await updateById(id, { name, obj });
        res.status(200).json(updatedTemplate);
    } catch (error) {
        handleError(error, res);
    }
}

// delete template
export const deleteTemplateById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteById(id);
        res.status(204).end();
    } catch (error) {
        handleError(error, res);
    }
}

export const findTemplateById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const template = await findById(id);
        res.status(200).json(template);
    } catch (error) {
        handleError(error, res);
    }
}

export const findTemplatesByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.uid;
        const templates = await findByUser(userId);
        res.status(200).json(templates);
    } catch (error) {
        handleError(error, res);
    }
}