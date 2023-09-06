import express from 'express';
import { deleteAccount, editAccount, getAccount, login, register, updateAccount } from '../controllers/accounts.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id/edit', editAccount);
router.post('/:id', updateAccount);
router.delete('/:id', deleteAccount);
router.get('/', getAccount);

export default router;