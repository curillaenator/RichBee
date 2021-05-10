import axios from "axios";

// API KEYS

const imdb = {
  method: "GET",
  url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
  },
};

const alt = {
  method: "GET",
  url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  },
};

// INIT

const RESET = "app/RESET";
const SET_LAST_SEARCH = "app/SET_LAST_SEARCH";
const SET_IS_SEARCHING = "app/SET_IS_SEARCHING";
const SET_SEARCHRES_IDS = "app/SET_SEARCHRES_IDS";
const SET_SEARCHRES = "app/SET_SEARCHRES";
const SET_DETAILS = "app/SET_DETAILS";
// const SET_PHOTOS = "app/SET_PHOTOS";
const SET_SIMILAR_IDS = "app/SET_SIMILAR_IDS";
const SET_SIMILAR = "app/SET_SIMILAR";

const reset = {
  lastSearch: null,
  isSearching: false,
  search: {
    q: 10,
    page: 1,
  },
  searchResIDs: [],
  searchRes: [],
  details: null,
  // photos: null,
  similarIDs: [],
  similar: null,
};

export const initialState = {
  lastSearch: null,
  isSearching: false,
  search: {
    q: 10,
    page: 1,
  },
  searchResIDs: [],
  searchRes: [],
  details: {
    Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Year: "2003",
    Rated: "PG-13",
    Released: "09 Jul 2003",
    Runtime: "143 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "Gore Verbinski",
    Writer:
      "Ted Elliott (screen story), Terry Rossio (screen story), Stuart Beattie (screen story), Jay Wolpert (screen story), Ted Elliott (screenplay), Terry Rossio (screenplay)",
    Actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
    Plot:
      "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 5 Oscars. Another 38 wins & 99 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Metascore: "63",
    imdbRating: "8.0",
    imdbVotes: "1,023,425",
    imdbID: "tt0325980",
    Type: "movie",
    DVD: "23 Nov 2015",
    BoxOffice: "$305,413,918",
    Production: "Jerry Bruckheimer Films",
    Website: "N/A",
    Response: "True",
  },
  // photos: null,
  similarIDs: [],
  similar: [
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      Rated: "PG-13",
      Released: "09 Jul 2003",
      Runtime: "143 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "Gore Verbinski",
      Writer:
        "Ted Elliott (screen story), Terry Rossio (screen story), Stuart Beattie (screen story), Jay Wolpert (screen story), Ted Elliott (screenplay), Terry Rossio (screenplay)",
      Actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
      Plot:
        "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 38 wins & 99 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Metascore: "63",
      imdbRating: "8.0",
      imdbVotes: "1,023,425",
      imdbID: "tt0325980",
      Type: "movie",
      DVD: "23 Nov 2015",
      BoxOffice: "$305,413,918",
      Production: "Jerry Bruckheimer Films",
      Website: "N/A",
      Response: "True",
    },
  ],
};

// REDUCER

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

    // case SET_PHOTOS:
    //   return { ...state, photos: action.payload };

    case SET_SIMILAR_IDS:
      return { ...state, similarIDs: action.payload };

    case SET_SIMILAR:
      return { ...state, similar: action.payload };

    case RESET:
      return action.state;

    default:
      return state;
  }
};

// ACTIONS

const stateReset = (state) => ({ type: RESET, state });
const setLastSearch = (payload) => ({ type: SET_LAST_SEARCH, payload });
const setIsSearching = (payload) => ({ type: SET_IS_SEARCHING, payload });
const setSearchResIDS = (payload) => ({ type: SET_SEARCHRES_IDS, payload });
const setSearchRes = (payload) => ({ type: SET_SEARCHRES, payload });
const setDetails = (payload) => ({ type: SET_DETAILS, payload });
// const setPhotos = (payload) => ({ type: SET_PHOTOS, payload });
const setSimilarIDs = (payload) => ({ type: SET_SIMILAR_IDS, payload });
const setSimilar = (payload) => ({ type: SET_SIMILAR, payload });

// REQUESTS

export const getDataOnSearch = (txt, search, dispatch) => {
  dispatch(setIsSearching(true));
  dispatch(setLastSearch(txt));
  dispatch(setSearchRes([]));
  dispatch(setSearchResIDS([]));

  const dataRequest = (titleID) => {
    return axios
      .request({ ...alt, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  axios
    .request({ ...imdb, params: { type: "get-movies-by-title", title: txt } })
    .then((res) => {
      if (res.data.search_results > 0) {
        dispatch(setSearchResIDS(res.data.movie_results.map((m) => m.imdb_id)));

        const searchPromises = res.data.movie_results
          .slice(0, search.q)
          .map((movie) => dataRequest(movie.imdb_id));

        Promise.all(searchPromises).then((results) => {
          dispatch(setSearchRes(results));
          dispatch(setIsSearching(false));
        });
      }

      if (res.data.search_results === 0) {
        dispatch(setSearchResIDS([]));
        dispatch(setSearchRes([]));
        dispatch(setIsSearching(false));
      }
    })
    .catch((err) => console.error(err));
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

export const getTitleMeta = async (id, dispatch) => {
  // const details = axios
  //   .request({ ...imdb, params: { type: "get-movie-details", imdb: id } })
  //   .then((res) => res.data)
  //   .catch((err) => console.error(err));

  // const images = axios
  //   .request({
  //     ...imdb,
  //     params: { type: "get-movies-images-by-imdb", imdb: id },
  //   })
  //   .then((res) => res.data)
  //   .catch((err) => console.error(err));

  // const similar = axios
  //   .request({
  //     ...imdb,
  //     params: { type: "get-similar-movies", imdb: id },
  //   })
  //   .then((res) => res.data)
  //   .catch((err) => console.error(err));

  await axios
    .request({
      ...alt,
      params: { i: id, r: "json", plot: "full" },
    })
    .then((res) => dispatch(setDetails(res.data)))
    .catch((err) => console.error(err));

  const simIdArr = ["tt0026174", "tt0449088", "tt1298650", "tt1790809"];

  const getSimDetails = (titleID) => {
    return axios
      .request({ ...alt, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  const simPromises = simIdArr.slice(0, 4).map((ttlID) => getSimDetails(ttlID));

  Promise.all(simPromises)
    .then((similars) => dispatch(setSimilar(similars)))
    .catch((err) => console.error(err));

  // await axios
  //   .request({ ...imdb, params: { type: "get-similar-movies", imdb: id } })
  //   .then((res) => {
  //     const simIDs = res.data.movie_results.map((title) => title.imdb_id);

  //     dispatch(setSimilarIDs(simIDs));

  //     const getSimDetails = (titleID) => {
  //       return axios
  //         .request({ ...alt, params: { i: titleID, r: "json", plot: "full" } })
  //         .then((res) => res.data)
  //         .catch((err) => console.error(err));
  //     };

  //     const simPromises = simIDs
  //       .slice(0, 4)
  //       .map((ttlID) => getSimDetails(ttlID));

  //     Promise.all(simPromises)
  //       .then((similars) => dispatch(setSimilar(similars)))
  //       .catch((err) => console.error(err));
  //   })
  //   .catch((err) => console.error(err));
};

//////////////////////

export const tempSwitch = (dispatch) => {
  dispatch(stateReset(reset));

  const delayed = () => {
    dispatch(stateReset(initialState));
  };

  setTimeout(delayed, 2000);
};
