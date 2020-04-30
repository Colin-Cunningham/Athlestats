import axios from "axios";

export default {
  seePlayer: function(id, playerId){
    return axios.get("/api/team", id, playerId)
  },
  getInfo: function(email) {
    return axios.get("/api/information/" + email);
  },
  add2user: function(email, id) {
    return axios.put("/api/information/" + email, id);
  },
  getTeam: function(teamID) {
    return axios.get("/api/team/" + teamID);
  },
  createTeam: function(data) {
    return axios.post("/api/team/", data);
  },
  addPlayer: function(data) {
    return axios.put("/api/team/", data);
  },
  updateUserTeam: function(email, id) {
    return axios.put("/api/information/" + email + "/" + id);
  },
  authenticate: function(email, password) {
    return axios.post("/api/authenticate", email, password);
  },
};
