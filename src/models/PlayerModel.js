import mongoose from "mongoose";

const schema = new mongoose.Schema({
    full_name: {type: String, required: true},
    image: {type: String, required: true},
    number: {type: String, required: true},
    position: {type: String, required: true},
    footed: {type: String, required: true},
    born: {type: String, required: true},
    national_team: {type: String, required: true},
    introduce: {type: String, required: true},
    stats: {type: String, required: true},
    video: {type: String, required: true},
    twitter: {type: String, required: true},
    instagram: {type: String, required: true},
    facebook: {type: String, required: true},
    name: {type: String, required: true},
    club: {type: String, required: true},
}, {timestamps: true})

export const PlayerModel = mongoose.model('Player', schema);