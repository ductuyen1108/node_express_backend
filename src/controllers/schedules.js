import { ScheduleModel } from "../models/ScheduleModel.js";

export const getSchedules = async (req, res) => {
    try {
        const shcedules = await ScheduleModel.find();
        console.log('shcedules', shcedules);
        res.status(200).json(shcedules);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

export const getScheduleByClub = async (req, res) => {
    try {
        const clubName = req.params.name;
        const schedule = await ScheduleModel.findOne({ name_club: clubName})

        if(!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }

        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createSchedule = async (req, res) => {
    try {
        const newSchedule = req.body;
        const schedule = new ScheduleModel(newSchedule);

        await schedule.save();
        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const editSchedule = async (req, res) => {
    try {
        const scheduleValue = req.params.id;
        const schedule = await ScheduleModel.findById(scheduleValue);
        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateSchedule = async (req, res) => {
    try {
        const updateSchedule = req.body;

        const schedule = await ScheduleModel.findOneAndUpdate({_id: updateSchedule._id}, updateSchedule, {new: true});
        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id;
        const deleteSchedule = await ScheduleModel.findByIdAndDelete(scheduleId);
        if(!deleteSchedule) {
            res.status(404).json({ error: "Schedule not found" });
        } else {
            res.status(200).json(deleteSchedule);
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};