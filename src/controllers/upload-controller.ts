import { Request, Response } from 'express';
import { handleError } from "../utils/error-handler.js";
import * as service from "../services/upload-service.js";
import path from 'path';

export const uploadFile = async (req: Request, res: Response) => {
    try {
        const fileInfo = service.uploadFile(req.file);
        res.send(fileInfo);
    } catch (error) {
        handleError(error, res);
    }
};

export const getFile = async (req: Request, res: Response) => {
    try {
        const { filename } = req.params;
        const filePath = path.resolve('', 'uploads', filename);
        res.sendFile(filePath);
    } catch (error) {
        handleError(error, res);
    }
};

export const deleteFile = async (req: Request, res: Response) => {
    try {
        const { filename } = req.params;
        await service.deleteFile(filename);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        handleError(error, res);
    }
};

export const deleteFiles = async (req: Request, res: Response) => {
    try {
        const { text } = req.params; // Get the text to search for from the request parameters
        await service.deleteFiles(text); // Delete files containing the specified text
        res.status(204).send(); // 204 No Content
    } catch (error) {
        handleError(error, res);
    }
};