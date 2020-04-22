import axios from "axios";

export default {
 
  getInfo: function(email) {
    return axios.get("/api/information/" + email);
  },

};
