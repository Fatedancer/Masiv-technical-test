import axios from "axios";

export const xkcdAPI = () => {
  // Create an instance of Axios with specific configurations
  const instance = axios.create({
    baseURL: "http://localhost:8080/https://xkcd.com",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  // Return the configured instance
  return instance;
};
