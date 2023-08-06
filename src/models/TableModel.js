import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    name_club: {type: String, required: true},
    logo: {type: String, required: true},
    matches_played: {type: Number, required: true},
    wins: {type: Number, required: true},
    drawns: {type: Number, required: true},
    losses: {type: Number, required: true},
    goals_for: {type: Number, required: true},
    goals_against: {type: Number, required: true}
});

const clubsLengthValidator = (clubs) => {
    return clubs.length >= 18 && clubs.length <= 20;
};

const tableSchema = new mongoose.Schema ({
    season: { type: String, required: true },
    team: { type: String, required: true },
    league: { type: String, required: true },
    clubs: {
        type: [clubSchema],
        required: true,
        validate: [clubsLengthValidator, '{PATH} must have 18-20 clubs.'],
    },
},{timestamps: true});



export const TableModel = mongoose.model('Table', tableSchema);