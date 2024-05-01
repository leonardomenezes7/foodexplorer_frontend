import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-ppw2.onrender.com"
})