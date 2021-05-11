import { api } from "../utils/api";
import axios from "axios";

// import { response } from "../utils/tmp";

// REDUCER

const SET_LAST_SEARCH = "app/SET_LAST_SEARCH";
const SET_IS_SEARCHING = "app/SET_IS_SEARCHING";
const SET_SEARCHRES_IDS = "app/SET_SEARCHRES_IDS";
const SET_SEARCHRES = "app/SET_SEARCHRES";
const SET_DETAILS = "app/SET_DETAILS";

export const initialState = {
  lastSearch: null,
  isSearching: false,
  search: {
    q: 10,
    page: 1,
  },
  searchResIDs: [],
  searchRes: [],
  details: [],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LAST_SEARCH:
      return { ...state, lastSearch: action.payload };

    case SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload };

    case SET_SEARCHRES_IDS:
      return { ...state, searchResIDs: action.payload };

    case SET_SEARCHRES:
      return { ...state, searchRes: action.payload };

    case SET_DETAILS:
      return { ...state, details: action.payload };

    default:
      return state;
  }
};

// ACTIONS

const setLastSearch = (payload) => ({ type: SET_LAST_SEARCH, payload });
const setIsSearching = (payload) => ({ type: SET_IS_SEARCHING, payload });
const setSearchResIDS = (payload) => ({ type: SET_SEARCHRES_IDS, payload });
const setSearchRes = (payload) => ({ type: SET_SEARCHRES, payload });
const setDetails = (payload) => ({ type: SET_DETAILS, payload });

// REQUESTS

const alt = {
  method: "GET",
  url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  },
};

export const getDataOnSearch = (text, search, dispatch) => {
  dispatch(setIsSearching(true));
  dispatch(setLastSearch(text));
  dispatch(setSearchRes([]));
  dispatch(setSearchResIDS([]));

  const metaAltRequest = (titleID) => {
    return axios
      .request({ ...alt, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  api.searchTitle(text).then((res) => {
    if (res.results && res.results.length > 0) {
      dispatch(setSearchResIDS(res.results.map((ttl) => ttl.id)));

      const searchPromises = res.results
        .slice(0, search.q)
        .map((title) => metaAltRequest(title.id));

      Promise.all(searchPromises).then((dataRes) => {
        dispatch(setSearchRes(dataRes));
        dispatch(setIsSearching(false));
      });
    }

    if (!res.results || res.results.length === 0) {
      dispatch(setSearchResIDS([]));
      dispatch(setSearchRes([]));
      dispatch(setIsSearching(false));
    }
  });
};

export const getMoreSearchResults = (
  searchRes,
  searchResIDs,
  search,
  dispatch
) => {
  dispatch(setIsSearching(true));

  const idsBunch = searchResIDs.slice(
    searchRes.length,
    searchRes.length + search.q
  );

  const dataRequest = (titleID) => {
    return axios
      .request({ ...alt, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  const pagePromise = idsBunch.map((titleID) => dataRequest(titleID));

  Promise.all(pagePromise).then((page) => {
    dispatch(setSearchRes([...searchRes, ...page]));
    dispatch(setIsSearching(false));
  });
};

export const getTitle = async (id, dispatch) => {
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
