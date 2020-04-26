import axios from "axios";

export default {
 
  getInfo: function(email) {
    return axios.get("/api/information/" + email);
  },
  getTeam: function(teamID) {
    return axios.get("/api/team/" + teamID);
  },
  createTeam: function(data) {
    return axios.post("/api/team/", data);
  },
  updateUserTeam: function(email, id) {
    return axios.put("/api/information/" + email + "/" + id);
  },
};
