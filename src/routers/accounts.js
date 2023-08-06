import express from 'express';
import { getAccount, login, register } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccount);
router.post('/login', login);
router.post('/register', register);

export default router;