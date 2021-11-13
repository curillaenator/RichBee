import axios from "axios";

import { ResultItem } from "../Reducers/app";

const base = axios.create({ baseURL: "https://imdb-api.com/en/API/" });
const key = "k_ekuuxtc0";

interface SearchResponse {
  searchType: string;
  expression: string;
  results: ResultItem[];
  errorMessage: string;
}

interface API {
  searchTitle: (title: string) => Promise<SearchResponse>;
  getTitle: (titleID: string) => Promise<any>;
}

export const api: API = {
  searchTitle: (title: string) => {
    return base
      .get(`SearchTitle/${key}/${title}`)
      .then((r) => r.data)
      .catch((err) => console.error(err));
  },

  getTitle: (titleID) => {
    return base
      .get(`Title/${key}/${titleID}/Posters,Images,Trailer,Ratings`)
      .then((r) => r.data)
      .catch((err) => console.error(err));
  },
};
