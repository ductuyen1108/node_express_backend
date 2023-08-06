import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name_club: { type: String, required: true},
    acronym_club: { type: String, required: true},
    lea_name: { type: String, required: true},
    stadium: { type: String, required: true},
    logo: { type: String, required: true},
    overview: { type: String, required: true},
    history: { type: String, required: true},
    stadium_desc: { type: String, required: true},
    trophy: { type: String, required: true},
    img_history: { type: String, required: true},
    img_stadium: { type: String, required: true},
    img_trophy: { type: String, required: true},
}, {timestamps: true})

export const ClubModel = mongoose.model('Club', schema);