import express from 'express';
import { getPlayers, getPlayerByName, createPlayer, updatePlayer, getPlayersByClubName, editPlayer, deletePlayer, getPlayerByClubAndName } from '../controllers/players.js';

const router = express.Router();

router.post('/', createPlayer);
router.get('/:id/edit', editPlayer)
router.post('/:id', updatePlayer);
router.get('/name/:name', getPlayerByName);
router.get('/club/:club', getPlayersByClubName);
router.get('/:club/:name', getPlayerByClubAndName);
router.delete('/:id', deletePlayer)
router.get('/', getPlayers);

export default router;