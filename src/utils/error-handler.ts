// src/utils/errorHandler.ts

import { Prisma } from '@prisma/client';
import { Response } from 'express';

export const handleError = (error: any, res: Response) => {
    console.error(error); // Log the error for debugging purposes

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma-specific errors (e.g., unique constraint violations)
        if (error.code === 'P2002') { // Example: Unique constraint violation
            return res.status(409).json({ error: 'Duplicate field value' });
        }
    } else if (error instanceof Error) {
        // Handle general errors
        return res.status(500).json({ error: error.message });
    } else {
        // Handle unknown errors
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};