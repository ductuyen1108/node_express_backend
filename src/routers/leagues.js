import express from'express';
import {createLeague, editLeague, updateLeague, getLeagueByName, getLeague, deleteLeague} from'../controllers/leagues.js';

const router = express.Router();

router.post('/', createLeague);
router.get('/:id/edit', editLeague);
router.post('/:id', updateLeague);
router.get('/name/:name', getLeagueByName);
router.delete('/:id', deleteLeague);
router.get('/', getLeague);

export default router;