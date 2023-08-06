import mongoose from "mongoose";

const schema = new mongoose.Schema({
    lea_name: {type: String, required: true},
    country: {type: String, required: true},
    acronym_lea: {type: String, required: true},
    description: {type: String, required: true},
    logo: {type: String, required: true},
}, {timestamps: true})

export const LeagueModel = mongoose.model('League', schema);