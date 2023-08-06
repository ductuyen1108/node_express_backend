import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
}, {timestamps: true});

export const AccountModel = mongoose.model('Account', schema);