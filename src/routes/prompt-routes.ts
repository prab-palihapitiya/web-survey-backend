import express from 'express';
import * as controller from '../controllers/prompt-controller.js';

const router = express.Router();

router.post('/', controller.generateQuestionsUsingPrompt);
router.post('/generate', controller.generateQuestionsUsingAdvancedPrompt);
router.post('/filter', controller.filterQuestions);

export default router;