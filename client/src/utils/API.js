import axios from "axios";

export default {
 
  getInfo: function(email) {
    return axios.get("/api/information/" + email);
  },
  getTeam: function(teamID) {
    return axios.get("/api/team/" + teamID);
  }
};
