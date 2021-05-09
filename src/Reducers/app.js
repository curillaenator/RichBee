import axios from "axios";

const SET_SEARCH = "app/SET_DATA";
const SET_DETAILES = "app/SET_DETAILES";
const SET_PHOTOS = "app/SET_PHOTOS";
const SET_AWARDS = "app/SET_AWADRS";

export const initialState = {
  searchRes: null,
  awards: {
    awardsSummary: {
      highlighted: {
        awardName: "Oscar",
        count: 5,
        eventId: "/event/ev0000003/",
        isWinner: false,
      },
      otherNominationsCount: 99,
      otherWinsCount: 38,
    },
  },
  photos: {
    images: [
      {
        width: 980,
        url:
          "https://m.media-amazon.com/images/M/MV5BNzQ3NzBiMjItNTU1NS00MzA2LWFlNWEtMjc0YTQ4Njc0YjAzXkEyXkFqcGdeQXVyMTA4NzQxMzQ4._V1_.jpg",
      },
    ],
  },
  curDetails: {
    genres: ["Action", "Adventure", "Fantasy"],
    plotSummary: {
      author: "the lexster",
      id: "/title/tt0325980/plot/ps0223687",
      text:
        "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",
    },
    ratings: { canRate: true, rating: 8, ratingCount: 1025222, topRank: 276 },
    title: {
      id: "/title/tt0325980/",
      image: {
        height: 1000,
        id: "/title/tt0325980/images/rm2487103488",
        url:
          "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        width: 671,
      },
      runningTimeInMinutes: 143,
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      titleType: "movie",
      year: 2003,
    },
  },
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, searchRes: action.payload };

    case SET_DETAILES:
      return { ...state, curDetails: action.payload };

    case SET_PHOTOS:
      return { ...state, photos: action.payload };

    case SET_AWARDS:
      return { ...state, awards: action.payload };

    default:
      return state;
  }
};

// ACTIONS

const setSearchRes = (payload) => ({ type: SET_SEARCH, payload });
const setDetails = (payload) => ({ type: SET_DETAILES, payload });
const setPhotos = (payload) => ({ type: SET_PHOTOS, payload });
const setAwadrs = (payload) => ({ type: SET_AWARDS, payload });

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

export const getDetailesOnTitle = (id, dispatch) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
    params: { tconst: id, currentCountry: "US" },
    headers: {
      "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((res) => dispatch(setDetails(res.data)))
    .catch((error) => console.error(error));
};

export const getPhotosOnTitle = (id, dispatch) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-images",
    params: { tconst: id, limit: "5" },
    headers: {
      "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((res) => dispatch(setPhotos(res.data)))
    .catch((error) => console.error(error));
};

export const getAwardsOnTitle = (id, dispatch) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-awards-summary",
    params: { tconst: id },
    headers: {
      "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((res) => dispatch(setAwadrs(res.data)))
    .catch((error) => console.error(error));
};
