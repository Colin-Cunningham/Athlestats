const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true },
    teamID:{type: String, required: true},
    email: {type: String, required: true},
    cellPhone: {type: Number, required: true},
    position: {type: String},
    highlightTape:{type: URL},
    stats:[]
  });
  



const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
