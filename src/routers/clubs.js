import express from "express";
import { getClubs, getClubByName, getClubsByLeagueName, createClub, updateClub, editClub, deleteClub, searchClubs } from '../controllers/clubs.js';

const router = express.Router();

router.get('/search', searchClubs);

router.post('/', createClub);
router.get('/:id/edit', editClub);
router.post('/:id', updateClub);
router.get('/:name', getClubByName);
router.get('/leagueName/:name', getClubsByLeagueName);
router.delete('/:id', deleteClub);
router.get('/', getClubs);


export default router;