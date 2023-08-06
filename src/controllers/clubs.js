import {ClubModel} from "../models/ClubModel.js";

export const getClubs = async (req, res) => {
    try {
        const clubs = await ClubModel.find()
        res.status(200).json(clubs);
    } catch (err) {
        res.status(500).json({ error: err })
    }
};

export const getClubByName = async (req, res) => {
    try {
        const clubName = req.params.name;
        const club = await ClubModel.findOne({name_club: clubName});

        if(!club) {
            return res.status(404).json({error: 'Club not found'});
        }

        return res.status(200).json(club);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

export const getClubsByLeagueName = async (req, res) => {
    try {
        const leagueName = req.params.name;
        const clubs = await ClubModel.find({ lea_name: leagueName });
        
        if(!clubs.length === 0) {
            res.status(404).json({ error: "No clubs found in this league"});
        }
        res.status(200).json(clubs);
    } catch (err) {
        res.status(500).json({ error: err })
    }
};

export const createClub = async (req, res) => {
    try {
        const newClub = req.body; // Data from Client

        const club = new ClubModel(newClub);
        await club.save();
        
        res.status(200).json(newClub);
    } catch (err) {
        res.status(500).json({ error: err })
    }
};

export const editClub = async (req, res) => {
    try {
        const clubValue = req.params.id;
        const club = await ClubModel.findById(clubValue);
        res.status(200).json(club);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};

export const deleteClub = async (req, res) => {
    try {
        const clubId = req.params.id;
        const deleteClub = await ClubModel.findByIdAndDelete(clubId);
        if(!deleteClub) {
            res.status(404).json({error: "Club not found"});
        } else {
            res.status(200).json(deleteClub);
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateClub = async (req, res) => {
    try {
        const updateClub = req.body;

        const club = await ClubModel.findOneAndUpdate({ _id: updateClub._id }, updateClub, { new: true });
        res.status(200).json(club);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const searchClubs = async (req, res) => {
    try {
        const searchTerm = req.query.name;
        if (!searchTerm || searchTerm.trim() === '') {
            return res.status(400).json({ error: "Name is required for search" });
        }
        const type = req.query.type;
        let maxResults = 10;
        if (type === 'less') {
            maxResults = 5;
        } else if (type === 'more') {
            maxResults = 8;
        }

        const clubs = await ClubModel.find({
            $or: [
                { name_club: { $regex: searchTerm, $options: 'i'}},
                { acronym_club: { $regex: searchTerm, $options: 'i'}},
                { stadium: { $regex: searchTerm, $options: 'i'}},
            ]
        }).limit(maxResults);

        if (!clubs || clubs.length === 0) {
            res.status(404).json({ error: "No clubs found" });
        } else {
            res.status(200).json(clubs);
        };
    } catch (err) {
        res.status(500).json({ error: err });
    }
};