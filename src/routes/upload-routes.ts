import express from "express";
import * as controller from "../controllers/upload-controller.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// File storage engine for multer (we'll use default naming for now)
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        // Let multer use the original filename temporarily
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: fileStorageEngine, limits: { fileSize: 5 * 1024 * 1024 } });

// Middleware to handle the file upload and rename it afterward
router.post('/', upload.single('file'), (req, res) => {
    const { customname } = req.body;

    if (req.file && customname) {
        const ext = path.extname(req.file.originalname);

        // Ensure the file exists before renaming
        const oldPath = path.resolve('', 'uploads', req.file.filename);
        const newPath = path.resolve('', 'uploads', customname + ext);

        // Rename the file
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error('Error renaming file:', err);
                return res.status(500).json({ message: 'Error renaming file.' });
            }

            // Send the new path back to the frontend
            res.status(200).json({ path: `${process.env.API_URL}/upload/${customname}${ext}` });
        });
    }
});

router.get('/:filename', controller.getFile);
router.delete('/:filename', controller.deleteFile);

export default router;
