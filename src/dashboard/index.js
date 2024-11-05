import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://ebim-mtk-cgaseugrgweradgp.canadacentral-01.azurewebsites.net/api/",
});
