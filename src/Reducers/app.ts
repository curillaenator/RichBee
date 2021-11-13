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
}

export const initialState: IS = {
  lastSearch: "",
  isSearching: false,
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

type GetTitle = (id: string, dispatch: Dispatch<any>) => void;

export const getTitle: GetTitle = async (id, dispatch) => {
  dispatch(setDetails(null));

  api
    .getTitle(id)
    .then((title) => dispatch(setDetails(title)))
    .catch((err) => console.error(err));
};
