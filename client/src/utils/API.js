import axios from "axios";

export default {
  signup: function() {
    return axios.post("/api/register");
  },
  signin: function() {
    return axios.post("/api/authenticate");
  },
};
