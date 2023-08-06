import mongoose from "mongoose";

const roundSchedule = new mongoose.Schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    away_club: {type: String, required: true},
    away_logo: {type: String, required: true},
    away_stadium: {type: String, required: true},
    is_home_match: {type: Boolean, required: true},
})

const schedulesLengthValidator = (schedules) => {
    return schedules.length > 5 && schedules.length < 38;
};

const scheduleSchema = new mongoose.Schema({
    name_club: {type: String, required: true},
    logo: {type: String, required: true},
    stadium: {type: String, required: true},
    rounds: {
        type: [roundSchedule],
        required: true,
        validate: [schedulesLengthValidator, '{PATH} must have 30-38 schedules.'],
    },
},{timestamps: true});

export const ScheduleModel = mongoose.model('Schedule', scheduleSchema);
