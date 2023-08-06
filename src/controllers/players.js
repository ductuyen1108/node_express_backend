import {PlayerModel} from "../models/PlayerModel.js";

export const getPlayers = async (req, res) => {
    try {
        const players = await PlayerModel.find();
        console.log('players', players);
        res.status(200).json(players);
    } catch (err) {
        res.status(500).json({error: err})
    }
};

export const getPlayerByName = async (req, res) => {
    try {
        const playerName = req.params.name;
        const player = await PlayerModel.findOne({name: playerName});

        if(!player) {
            return res.status(404).send({error: 'Player not found'});
        }
        
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const getPlayersByClubName = async (req, res) => {
    try {
        const clubName = req.params.club;
        const players = await PlayerModel.find({club: clubName});

        if(players.length === 0) {
            return res.status(404).send({error: 'Players not found'});
        }

        res.status(200).json(players);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const getPlayerByClubAndName = async (req, res) => {
    try {
        const club = req.params.club;
        const name = req.params.name;
        const player = await PlayerModel.findOne({club: club, name: name});

        if(!player) {
            return res.status(404).send({error: 'Player not found'});
        };

        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const createPlayer = async (req, res) => {
    try {
        const newPlayer = req.body;
        const player = new PlayerModel(newPlayer);
        await player.save();

        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const editPlayer = async (req, res) => {
    try {
        const playerValue = req.params.id;
        const player = await PlayerModel.findById(playerValue);
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.id;
        const deletePlayer = await PlayerModel.findByIdAndDelete(playerId);

        if(!deletePlayer) {
            res.status(404).json({error: "Player not found"});
        }

        res.status(200).json(deletePlayer)
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const updatePlayer = req.body;
        const player = await PlayerModel.findOneAndUpdate({_id: updatePlayer._id}, updatePlayer, {new: true});
        
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({error: err});
    }
};
