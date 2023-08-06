import express from "express";
import { createSchedule, deleteSchedule, editSchedule, getScheduleByClub, getSchedules, updateSchedule } from '../controllers/schedules.js';


const router = express.Router();

router.post('/', createSchedule);
router.get('/:id/edit', editSchedule);
router.post('/:id', updateSchedule);
router.get('/:name', getScheduleByClub);
router.delete('/:id', deleteSchedule);
router.get('/', getSchedules);

export default router;