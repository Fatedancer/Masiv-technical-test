import axios from "axios";

const xkcdAPI = axios.create({
  baseURL: "http://localhost:8080/https://xkcd.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchComic = async (id: number) => {
  try {
    const response = await xkcdAPI.get(`/${id}/info.0.json`);
    return response.data;
  } catch (error) {
    console.error({ error });
  }
};

export const fetchRandomComic = async () => {
  try {
    const response = await xkcdAPI.get("/info.0.json");
    return response.data;
  } catch (error) {
    console.error({ error });
  }
};
