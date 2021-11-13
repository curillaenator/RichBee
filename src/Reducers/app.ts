import { Reducer, Dispatch } from "react";
import { api } from "../utils/api";

const SET_LAST_SEARCH = "app/SET_LAST_SEARCH";
const SET_IS_SEARCHING = "app/SET_IS_SEARCHING";
const SET_SEARCHRES = "app/SET_SEARCHRES";
const SET_DETAILS = "app/SET_DETAILS";

export interface ResultItem {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface IS {
  lastSearch: string;
  isSearching: boolean;
  searchRes: ResultItem[];
  details: any;

  search: any;
}

export const initialState: IS = {
  lastSearch: "",
  isSearching: false,
  search: {
    q: 10,
    page: 1,
  },
  searchRes: [],
  details: null,
};

export const appReducer: Reducer<IS, any> = (state, action) => {
  switch (action.type) {
    case SET_LAST_SEARCH:
      return { ...state, lastSearch: action.payload };

    case SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload };

    case SET_SEARCHRES:
      return { ...state, searchRes: action.payload };

    case SET_DETAILS:
      return { ...state, details: action.payload };

    default:
      return state;
  }
};

// ACTIONS

type Action<P> = (payload: P) => { type: string; payload: P };

const setLastSearch: Action<string> = (payload) => ({
  type: SET_LAST_SEARCH,
  payload,
});

const setIsSearching: Action<boolean> = (payload) => ({
  type: SET_IS_SEARCHING,
  payload,
});

const setSearchRes: Action<ResultItem[]> = (payload) => ({
  type: SET_SEARCHRES,
  payload,
});

const setDetails: Action<IS["details"]> = (payload) => ({
  type: SET_DETAILS,
  payload,
});

// REQUESTS

// const alt = {
//   method: "GET",
//   url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
//   headers: {
//     "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
//     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//   },
// };

type GetSearchResults = (text: string, dispatch: Dispatch<any>) => void;

export const getDataOnSearch: GetSearchResults = (text, dispatch) => {
  dispatch(setIsSearching(true));
  dispatch(setLastSearch(text));
  dispatch(setSearchRes([]));

  api.searchTitle(text).then((res) => {
    if (res.results && res.results.length > 0) {
      dispatch(setSearchRes(res.results));
    }

    dispatch(setIsSearching(false));
  });
};

// export const getMoreSearchResults = (
//   searchRes,
//   searchResIDs,
//   search,
//   dispatch
// ) => {
//   dispatch(setIsSearching(true));

//   const idsBunch = searchResIDs.slice(
//     searchRes.length,
//     searchRes.length + search.q
//   );

//   const dataRequest = (titleID) => {
//     return axios
//       .request({ ...alt, params: { i: titleID, r: "json" } })
//       .then((res) => res.data)
//       .catch((err) => console.error(err));
//   };

//   const pagePromise = idsBunch.map((titleID) => dataRequest(titleID));

//   Promise.all(pagePromise).then((page) => {
//     dispatch(setSearchRes([...searchRes, ...page]));
//     dispatch(setIsSearching(false));
//   });
// };

type GetTitle = (id: string, dispatch: Dispatch<any>) => void;

export const getTitle: GetTitle = async (id, dispatch) => {
  dispatch(setDetails(null));

  api
    .getTitle(id)
    .then((title) => dispatch(setDetails(title)))
    .catch((err) => console.error(err));
};

// export const tempSwitch = (dispatch) => {
//   dispatch(setDetails(null));

//   const delayed = () => {
//     dispatch(setDetails(response));
//   };

//   setTimeout(delayed, 2000);
// };
