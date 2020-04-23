const mongoose = require('mongoose');


const TeamSchema = new mongoose.Schema({
    sport: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    highschool:{type: String, required: true},
    logo: {type: String},
    location:[{city: String},{state: String}],
    players:[]
  });
  



const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
