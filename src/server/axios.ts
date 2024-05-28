import axios from "axios";

export const client = axios.create({
    baseURL: 'https://registro-ponto-back.vercel.app/api/',
});