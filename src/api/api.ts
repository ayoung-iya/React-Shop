import { BASE_API_URL } from "../constants/url";

const API = {
  get: async (url: string) => {
    const response = await fetch(BASE_API_URL + url);
    const data = await response.json();

    return data;
  },
};

export default API;
