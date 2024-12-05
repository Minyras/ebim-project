import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ebimtk-001-site1.mtempurl.com/api/",
  // baseURL: "http://213.238.180.195:1230/api/",
});
