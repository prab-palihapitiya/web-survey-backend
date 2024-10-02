import express from 'express';
import * as controller from '../controllers/template-controller.js';

const router = express.Router();

router.post('/', controller.createTemplate);
router.put('/:id', controller.updateTemplateById);
router.get('/user/:uid', controller.findTemplatesByUserId);
router.get('/:id', controller.findTemplateById);
router.delete('/:id', controller.deleteTemplateById);

export default router;
