import { User } from "@prisma/client";
import prisma from "../config/db.js";

export const create = async (userData: { email: string; name?: string }): Promise<User> => {
    // Validate user data (e.g., check if email is valid, etc.)
    return prisma.user.create({
        data: userData
    });
};

export const findUser = async (userId: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    });
};
