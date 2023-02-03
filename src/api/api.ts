import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASERL;
const token = process.env.REACT_APP_JWT;

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    authorization: `bearer ${token}`,
  },
});
