const mongoose = require('mongoose');


// const StatsSchema = new mongoose.Schema({
//   firstName: { type: String, required: true},
//   lastName: { type: String, required: true },
//   teamID:{type: String, required: true},
//   email: {type: String, required: true},
//   cellPhone: {type: Number, required: true},
//   position: {type: String},
//   number:{type: Number},
//   highlightTape:{type: String},
//   stats:[]
// });


const PlayerSchema = new mongoose.Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  teamID:{type: String, required: true},
  email: {type: String, required: true},
  cellPhone: {type: Number, required: true},
  oPosition: {type: String},
  dPosition: {type: String},
  number:{type: Number, unique: true},
  highlightTape:{type: String},
  stats:[]
});

const TeamSchema = new mongoose.Schema({
    sport: { type: String, required: true},
    name: { type: String, required: true },
    highschool:{type: String, required: true},
    logo: {type: String},
    city: {type: String},
    state: {type: String},
    teamID: {type: String},
    players:[PlayerSchema]
  });
  

  


const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
