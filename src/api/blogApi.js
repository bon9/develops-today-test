import axios from "axios";

const instanse = axios.create({
  baseURL: "https://simple-blog-api.crew.red",
  headers: { "Content-Type": "application/json" }
});

export default instanse;
