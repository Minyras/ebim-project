import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ebim-mtk-dashboard.azurewebsites.net/api/",
});
