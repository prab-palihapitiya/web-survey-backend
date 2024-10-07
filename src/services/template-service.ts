import { DesignTemplate } from "@prisma/client";
import prisma from "../config/db.js";

export const create = async (templateData: {
    name: string;
    obj: any;
    userId: string;
}): Promise<DesignTemplate> => {

    const { userId, ...restOfTemplateData } = templateData;

    const template = await prisma.designTemplate.create({
        // @ts-ignore
        data: {
            ...restOfTemplateData,
            user: { connect: { id: userId } }
        }
    });

    return template;
};

export const findAll = async (): Promise<DesignTemplate[]> => {
    return await prisma.designTemplate.findMany();
};

export const findByUser = async (userId: string): Promise<DesignTemplate[]> => {
    return await prisma.designTemplate.findMany({
        where: {
            userId
        }
    });
};

//find template by user, do not fetch the obj field
export const findByUserWithoutObj = async (userId: string): Promise<any[]> => {
    return await prisma.designTemplate.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            name: true,
        }
    });
};

//find template by id
export const findById = async (id: string): Promise<DesignTemplate | null> => {
    return await prisma.designTemplate.findUnique({
        where: {
            id
        }
    });
};

export const updateById = async (id
    : string, templateData: {
        name: string;
        obj: any;
        logo?: Buffer
    }
): Promise<DesignTemplate> => {
    const { name, obj } = templateData;

    return await prisma.designTemplate.update({
        where: {
            id
        },
        data: {
            name,
            obj
        }
    });
};

export const deleteById = async (id
    : string
): Promise<DesignTemplate> => {
    return await prisma.designTemplate.delete({
        where: {
            id
        }
    });
};
