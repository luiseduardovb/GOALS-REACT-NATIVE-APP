import axios from "axios";

const instance = axios.create({
  // baseURL: "https://goal-progress-tracker.herokuapp.com/",
  baseURL: "http://localhost:8000/",
});

export default instance;
