import axios from "axios";

const SET_SEARCH = "app/SET_DATA";

export const initialState = {
  searchRes: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, searchRes: action.payload };

    default:
      return state;
  }
};

// ACTIONS

export const setSearchRes = (payload) => ({ type: SET_SEARCH, payload });

// REQUESTS

export const getDataOnSearch = (query, dispatch) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: query },
    headers: {
      "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((res) => dispatch(setSearchRes(res.data)))
    .catch((err) => console.error(err));
};
