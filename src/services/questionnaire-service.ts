import { Questionnaire } from "@prisma/client";
import prisma from "../config/db.js";

export const create = async (questionnaireData: {
    userId: string;
    obj: any;
    status?: string;
}): Promise<Questionnaire> => {

    const { userId, ...restOfQuestionnaireData } = questionnaireData;

    const questionnaire = await prisma.questionnaire.create({
        // @ts-ignore
        data: {
            ...restOfQuestionnaireData,
            user: { connect: { id: userId } }
        }
    });

    return questionnaire;
};

export const findAll = async (): Promise<Questionnaire[]> => {
    return await prisma.questionnaire.findMany();
};

export const findByUser = async (userId: string): Promise<Questionnaire[]> => {
    return await prisma.questionnaire.findMany({
        where: {
            userId
        }
    });
};

//find questionnaire by user, do not fetch the obj field
export const findByUserWithoutObj = async (userId: string): Promise<any[]> => {
    return await prisma.questionnaire.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            name: true,
            status: true,
            createdAt: true,
            modifiedAt: true,
            testUrl: true,
            pubUrl: true
        }
    });
};

export const findById = async (id: string): Promise<Questionnaire | null> => {
    return await prisma.questionnaire.findUnique({
        where: {
            id
        }
    });
};

export const updateById = async (id: string, questionnaireData: {
    name: string;
    userId: string;
    obj: any;
    testUrl?: string;
    pubUrl?: string;
    status?: string;
}): Promise<Questionnaire> => {

    const { userId, ...restOfQuestionnaireData } = questionnaireData;

    const questionnaire = await prisma.questionnaire.update({
        where: {
            id
        },
        // @ts-ignore
        data: {
            ...restOfQuestionnaireData,
            user: { connect: { id: userId } }
        }
    });

    return questionnaire;
};

export const deleteById = async (id: string): Promise<Questionnaire> => {
    return await prisma.questionnaire.delete({
        where: {
            id
        }
    });
};