import {TableModel} from "../models/TableModel.js";

export const getTables = async (req, res) => {
    try {
        const tables = await TableModel.find();
        console.log('table', tables);
        res.status(200).json(tables);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getTablesByLeagueName = async (req, res) => {
    try {
        const leagueName = req.params.lea_name;
        const tables = await TableModel.find({lea_name: leagueName});

        if(!tables.length === 0) {
            return res.status(404).json({ error: 'Tables not found' });
        }
        res.status(200).json(tables);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getTablesBySeason = async (req, res) => {
    try {
        const season = req.params.season;
        const tables = await TableModel.find({season: season});

        if(!tables.length === 0) {
            return res.status(404).json({ error: 'Tables not found' });
        }
        res.status(200).json(tables);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getTableByTeam = async (req, res) => {
    try {
        const team = req.params.team;
        const table = await TableModel.findOne({team: team});
        if(!table) {
            res.status(404).json({ error: 'Table not found' });
        };
        res.status(200).json(table);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getTableByLeagueAndSeason = async (req, res) => {
    try {
        const league = req.params.league;
        const season = req.params.season;

        const table = await TableModel.findOne({league: league, season: season});

        if(!table) {
            return res.status(404).json({ error: 'Table not found' });
        }
        res.status(200).json(table);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createTable = async (req, res) => {
    try {
        const newTable = req.body;
        const table = new TableModel(newTable);
        await table.save();

        res.status(200).json('table', table);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const editTable = async (req, res) => {
    try {
        const tableValue = req.params.id;
        const table = await TableModel.findById(tableValue);
        res.status(200).json(table);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteTable = async (req, res) => {
    try {
        const tableId = req.params.id;
        const deleteTable = await TableModel.findByIdAndDelete(tableId);
        if (!deleteTable) {
            res.status(404).json({error: 'Table not found'});
        }
        res.status(200).json(deleteTable);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateTable = async (req, res) => {
    try {
        const updateTable = req.body;
        const table = await TableModel.findOneAndUpdate({ _id: updateTable._id }, updateTable, {new: true});
        
        res.status(200).json('table', table);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
