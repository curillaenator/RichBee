import axios from "axios";

const base = axios.create({ baseURL: "https://imdb-api.com/en/API/" });
const key = "k_ekuuxtc0";

export const api = {
  searchTitle: (title) =>
    base
      .get(`SearchTitle/${key}/${title}`)
      .then((r) => r.data)
      .catch((err) => console.error(err)),

  getTitle: (titleID) =>
    base
      .get(`Title/${key}/${titleID}/Posters,Images,Trailer,Ratings`)
      .then((r) => r.data)
      .catch((err) => console.error(err)),
};
