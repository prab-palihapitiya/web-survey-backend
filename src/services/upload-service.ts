// This is where you'll put your file processing logic, 
import fs from 'fs/promises';
import path from "path";

// like validation, moving the file, etc.
export const uploadFile = (file: any) => {
    // const filePath = path.join('./uploads', file.originalname);
    // For now, we just return the file information
    return file;
};

export const deleteFile = async (filename: string) => {
    try {
        const filePath = path.join('./uploads', filename);
        await fs.unlink(filePath);
    } catch (error) {
        // Handle the error appropriately, e.g., log it or throw a custom error
        console.error("Error deleting file:", error);
        throw error;
    }
};

export const deleteFiles = async (text: string) => {
    try {
        const files = await fs.readdir('./uploads'); // Read all files in the uploads directory
        const matchingFiles = files.filter(file => file.includes(text)); // Filter files containing the specified text

        // Delete each matching file
        for (const file of matchingFiles) {
            const filePath = path.join('./uploads', file);
            await fs.unlink(filePath);
        }
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
};
