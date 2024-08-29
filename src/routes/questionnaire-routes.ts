import express from 'express';
import * as controller from '../controllers/questionnaire-controller.js';

const router = express.Router();

router.post('/', controller.createQuestionnaire);
router.put('/:id', controller.updateQuestionnaireById);
router.get('/', controller.findAllQuestionnaires);
//router.get('/user/:uid', controller.findQuestionnairesByUserId);
router.get('/user/:uid', controller.findQuestionnairesByUserIdWithoutObj); //TODO: Add a flag to fetch the obj field
router.get('/:id', controller.findQuestionnaireById);
router.delete('/:id', controller.deleteQuestionnaireById); //TODO: Update instead delete. add a flag to soft delete

export default router;