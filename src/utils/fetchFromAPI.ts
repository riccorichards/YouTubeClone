import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function makeRequest(endpoint: string) {
  const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);
  return data;
}
