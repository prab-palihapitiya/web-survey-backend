import { Request, Response } from 'express';
import { create, deleteById, findAll, findById, findByUser, findByUserWithoutObj, updateById } from '../services/questionnaire-service.js';
import { handleError } from '../utils/error-handler.js';

// create questionnaire
export const createQuestionnaire = async (req: Request, res: Response) => {
    try {
        const { userId, obj, status } = req.body;
        const newQuestionnaire = await create({ userId, obj, status });
        res.status(201).json(newQuestionnaire);
    } catch (error) {
        handleError(error, res);
    }
};

// find all questionnaires
export const findAllQuestionnaires = async (req: Request, res: Response) => {
    try {
        const questionnaires = await findAll();
        res.status(200).json(questionnaires);
    } catch (error) {
        handleError(error, res);
    }
};

//find questionnaire by user
export const findQuestionnairesByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.uid;
        const questionnaires = await findByUser(userId);
        res.status(200).json(questionnaires);
    } catch (error) {
        handleError(error, res);
    }
};

//find questionnaire by user, do not fetch the obj field
export const findQuestionnairesByUserIdWithoutObj = async (req: Request, res: Response) => {
    try {
        const userId = req.params.uid;
        const questionnaires = await findByUserWithoutObj(userId);
        res.status(200).json(questionnaires);
    } catch (error) {
        handleError(error, res);
    }
};

//find questionnaire by id
export const findQuestionnaireById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const questionnaire = await findById(id);
        res.status(200).json(questionnaire);
    } catch (error) {
        handleError(error, res);
    }
};

//update questionnaire
export const updateQuestionnaireById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { name, userId, obj, testUrl, pubUrl, status } = req.body;
        console.log("updateQuestionnaireById", id, name, userId, obj, testUrl, pubUrl, status);

        const updatedQuestionnaire = await updateById(id, { name, userId, obj, testUrl, pubUrl, status });
        res.status(200).json(updatedQuestionnaire);
    } catch (error) {
        handleError(error, res);
    }
};

//delete questionnaire
export const deleteQuestionnaireById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteById(id);
        res.status(204).end();
    } catch (error) {
        handleError(error, res);
    }
};