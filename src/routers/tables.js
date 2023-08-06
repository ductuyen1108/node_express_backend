import express from "express";
import { getTables, createTable, updateTable, editTable, deleteTable, getTablesByLeagueName, getTablesBySeason, getTableByTeam, getTableByLeagueAndSeason } from "../controllers/tables.js";

const router = express.Router();

router.post('/', createTable);
router.get('/:id/edit', editTable);
router.post('/:id', updateTable);
router.get('/league/:lea_name', getTablesByLeagueName);
router.get('/season/:season', getTablesBySeason);
router.get('/team/:team', getTableByTeam);
router.get('/:league/:season', getTableByLeagueAndSeason);
router.delete('/:id', deleteTable);
router.get('/', getTables);

export default router;