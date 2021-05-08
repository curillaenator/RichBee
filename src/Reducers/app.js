import axios from "axios";

const SET_DATA = "app/SET_DATA";

export const initialState = {
  pallete: {
    bgDark: "#111111",
    bgDarkGray: "#1b1919",
    bgWhite: "#ffffff",
    bgRating: "#fac539",
    bgButton: "#4ea7f9",
    bgButtonHover: "#2093ff",
    fontBlack: "#323232",
    fontDark: "#312e2e",
    fontGray: "#5f5f5f",
    fontWhiteFE: "#fefefe",
    fontWhiteFB: "#fbfbfb",
    fontPlaceholder: "#cccccc",
  },
  ui: {
    searchTitle: "Unlimited movies, TV shows, and more.",
    searchSubtitle: "Watch anywhere. Cancel anytime.",
    searchPlaceholder: "Type here smth...",
  },
  data: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

// ACTIONS

export const setData = (payload) => ({ type: SET_DATA, payload });

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
    .then((res) => {
      dispatch(setData(res.data));
      console.log(res.data);
    })
    .catch((err) => console.error(err));
};
