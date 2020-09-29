import axios from "axios";

const instance = axios.create({
  baseURL: "https://goal-progress-tracker.herokuapp.com/",
});

export default instance;
