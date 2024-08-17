import express from 'express';
import * as controller from '../controllers/user-controller.js';

const router = express.Router();

// Create a new user (registration)
router.post('/', controller.createUser);

// Get a single user by ID
router.get('/:id', controller.findUserById);

export default router;