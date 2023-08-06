import {LeagueModel} from '../models/LeagueModel.js';

export const getLeague = async (req, res) => {
    try {
        const leagues = await LeagueModel.find();
        res.status(200).json(leagues);
    } catch (err) {
        res.status(500).json({error: err})
    }
};

export const getLeagueByName = async (req, res) => {
    try {
        const leagueName = req.params.name;
        const league = await LeagueModel.findOne({lea_name: leagueName});

        if(!league) {
            return res.status(404).send({error: 'League not Found'});
        }

        res.status(200).json(league);
    } catch (err) {
        res.status(500).json({error: err});
    }
};


export const createLeague = async (req, res) => {
    try {
        const newLeague = req.body;

        const league = new LeagueModel(newLeague);
        console.log('League data before saving:', league);
        await league.save();
        console.log('League data after saving:', league);
        
        res.status(200).json(league)
    } catch (err) {
        res.status(500).json({error: err})
    }
};

export const editLeague = async (req, res) => {
    try {
        const leagueValue = req.params.id;
        const league = await LeagueModel.findById(leagueValue);
        res.status(200).json(league);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const deleteLeague = async (req, res) => {
    try {
      const leagueId = req.params.id;
      const deletedLeague = await LeagueModel.findByIdAndDelete(leagueId);
  
      if (!deletedLeague) {
        return res.status(404).json({ error: 'League not found' });
      }
  
      res.status(200).json({ message: 'League deleted successfully', league: deletedLeague });
    } catch (err) {
      res.status(500).json({ error: err });
    }
};

export const updateLeague = async (req, res) => {
    try {        
        await LeagueModel.updateOne({ _id: req.body._id }, req.body);
        
        res.redirect('/leagues')
    } catch (err) {
        res.status(500).json({error: err});
    }
};
