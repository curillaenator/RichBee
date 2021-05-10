import axios from "axios";

const imdbBase = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
  },
};

const altBase = {
  method: "GET",
  url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  },
};

const base = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};

// INIT

const RESET = "app/RESET";
const SET_LAST_SEARCH = "app/SET_LAST_SEARCH";
const SET_SEARCHRES_IDS = "app/SET_SEARCHRES_IDS";
const SET_SEARCHRES = "app/SET_SEARCHRES";
const SET_DETAILS = "app/SET_DETAILS";
const SET_PHOTOS = "app/SET_PHOTOS";
const SET_AWARDS = "app/SET_AWADRS";
const SET_SIMILAR = "app/SET_SIMILAR";
const SET_VIDEOS = "app/SET_VIDEOS";

const reset = {
  lastSearch: null,
  search: {
    q: 10,
    page: 1,
  },
  searchResIDs: [],
  searchRes: [],
  awards: null,
  photos: null,
  details: null,
  similar: null,
  videos: null,
};

export const initialState = {
  lastSearch: null,
  search: {
    q: 10,
    page: 1,
  },
  searchResIDs: [{ imdb_id: "tt2231505" }],
  searchRes: [
    {
      Actors: "Omar Aranda, Marcelo Armand, Diego Brizzi, Mariano Chiesa",
      Awards: "N/A",
      BoxOffice: "N/A",
      Country: "Uruguay, Argentina, Chile",
      DVD: "15 Dec 2016",
      Director: "Walter Tournier",
      Genre: "Animation, Adventure, Family",
      Language: "Spanish, English",
      Metascore: "N/A",
      Plot:
        "A swashbuckling adventure aboard a pirate ship, turns into a battle for survival when Selkirk and Pupi, find themselves captive and marooned on a deserted island after the crew steals their treasure map and discovers their true identities.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGVlNjZlNjktN2FiNC00ZDU1LThiODMtODRiYmI5Nzg2ZTE2XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg",
      Production: "N/A",
      Rated: "Not Rated",
      Released: "02 Feb 2012",
      Response: "True",
      Runtime: "80 min",
      Title: "7 Sea Pirates",
      Type: "movie",
      Website: "N/A",
      Writer: "Enrique Cortés, Mario Jacob, Walter Tournier",
      Year: "2012",
      imdbID: "tt2231505",
      imdbRating: "6.1",
      imdbVotes: "157",
    },
  ],
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
  details: {
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
  similar: [
    {
      genres: ["Action", "Adventure", "Sci-Fi"],
      plotSummary: {
        author: "<jhailey@hotmail.com>",
        id: "/title/tt1055369/plot/ps0420711",
        text:
          "A youth chooses manhood. The week Sam Witwicky starts college, the Decepticons make trouble in Shanghai. A presidential envoy believes it's because the Autobots are around; he wants them gone. He's wrong: the Decepticons need access to Sam's mind to see some glyphs imprinted there that will lead them to a fragile object that, when inserted in an alien machine hidden in Egypt for centuries, will give them the power to blow out the sun. Sam, his girlfriend Mikaela Banes, and Sam's parents are in danger. Optimus Prime and Bumblebee are Sam's principal protectors. If one of them goes down, what becomes of Sam?",
      },
      ratings: {
        canRate: true,
        rating: 6,
        ratingCount: 387360,
        topRank: 4395,
      },
      title: {
        id: "/title/tt1055369/",
        image: {
          height: 2048,
          id: "/title/tt1055369/images/rm2147454208",
          url:
            "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_.jpg",
          width: 1382,
        },
        runningTimeInMinutes: 149,
        title: "Transformers: Revenge of the Fallen",
        titleType: "movie",
        year: 2009,
      },
    },
  ],
  videos: [
    {
      audioLanguage: "en",
      contentType: "Trailer",
      description: "CT#1 Post",
      durationInSeconds: 149,
      id: "/videoV2/vi2529559321",
      image: {
        height: 228,
        url:
          "https://m.media-amazon.com/images/M/MV5BN2RjMmU2MGQtMDMzZC00ZGE5LTlkOWMtMGJiNTAyNTljOTY4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",
        width: 304,
      },
      primaryTitle: {
        id: "/title/tt0325980/",
        image: {
          height: 1000,
          id: "/title/tt0325980/images/rm2487103488",
          url:
            "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          width: 671,
        },
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        titleType: "movie",
        year: 2003,
      },
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    },
  ],
};

// REDUCER

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LAST_SEARCH:
      return { ...state, lastSearch: action.payload };

    case SET_SEARCHRES_IDS:
      return { ...state, searchResIDs: action.payload };

    case SET_SEARCHRES:
      return { ...state, searchRes: action.payload };

    case SET_DETAILS:
      return { ...state, details: action.payload };

    case SET_PHOTOS:
      return { ...state, photos: action.payload };

    case SET_AWARDS:
      return { ...state, awards: action.payload };

    case SET_SIMILAR:
      return { ...state, similar: action.payload };

    case SET_VIDEOS:
      return { ...state, videos: action.payload };

    case RESET:
      return action.state;

    default:
      return state;
  }
};

// ACTIONS

const stateReset = (state) => ({ type: RESET, state });
const setLastSearch = (payload) => ({ type: SET_LAST_SEARCH, payload });
const setSearchResIDS = (payload) => ({ type: SET_SEARCHRES_IDS, payload });
const setSearchRes = (payload) => ({ type: SET_SEARCHRES, payload });
const setDetails = (payload) => ({ type: SET_DETAILS, payload });
const setPhotos = (payload) => ({ type: SET_PHOTOS, payload });
const setAwadrs = (payload) => ({ type: SET_AWARDS, payload });
const setSimilar = (payload) => ({ type: SET_SIMILAR, payload });
const setVideos = (payload) => ({ type: SET_VIDEOS, payload });

// REQUESTS

export const getDataOnSearch = (query, search, dispatch) => {
  dispatch(setLastSearch(query));

  console.log(query);

  const imdbOpts = {
    ...imdbBase,
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: "get-movies-by-title", title: query },
  };

  const dataRequest = (titleID) => {
    return axios
      .request({ ...altBase, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  axios
    .request(imdbOpts)
    .then((res) => {
      if (res.data.search_results > 0) {
        dispatch(setSearchResIDS(res.data.movie_results.map((m) => m.imdb_id)));

        const searchPromises = res.data.movie_results
          .slice(0, search.q)
          .map((movie) => dataRequest(movie.imdb_id));

        Promise.all(searchPromises).then((results) =>
          dispatch(setSearchRes(results))
        );
      }

      if (res.data.search_results === 0) {
        dispatch(setSearchResIDS([]));
        dispatch(setSearchRes([]));
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
  const idsBunch = searchResIDs.slice(
    search.q * search.page,
    search.q * search.page + search.q
  );

  const dataRequest = (titleID) => {
    return axios
      .request({ ...altBase, params: { i: titleID, r: "json" } })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };

  const pagePromise = idsBunch.map((titleID) => dataRequest(titleID));

  Promise.all(pagePromise).then((page) =>
    dispatch(setSearchRes([...searchRes, ...page]))
  );

  console.log(idsBunch);
};

const getDetailesOnTitle = (id, dispatch) => {
  const options = {
    ...base,
    url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
    params: { tconst: id, currentCountry: "US" },
  };

  axios
    .request(options)
    .then((res) => dispatch(setDetails(res.data)))
    .catch((error) => console.error(error));
};

const getPhotosOnTitle = (id, dispatch) => {
  const options = {
    ...base,
    url: "https://imdb8.p.rapidapi.com/title/get-images",
    params: { tconst: id, limit: "5" },
  };

  axios
    .request(options)
    .then((res) => dispatch(setPhotos(res.data)))
    .catch((error) => console.error(error));
};

const getAwardsOnTitle = (id, dispatch) => {
  const options = {
    ...base,
    url: "https://imdb8.p.rapidapi.com/title/get-awards-summary",
    params: { tconst: id },
  };

  axios
    .request(options)
    .then((res) => dispatch(setAwadrs(res.data)))
    .catch((error) => console.error(error));
};

const getSimilarOnTitle = (id, dispatch) => {
  const similarOptions = {
    ...base,
    url: "https://imdb8.p.rapidapi.com/title/get-more-like-this",
    params: {
      tconst: id,
      currentCountry: "US",
      purchaseCountry: "US",
    },
  };

  const similarHandler = (titles) => {
    return titles
      .slice(0, 4)
      .map((path) => path.replace("/title/", "").replace("/", ""));
  };

  const similarRequest = (titleID) => {
    const detailsOptions = {
      ...base,
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      params: { tconst: titleID, currentCountry: "US" },
    };

    return axios.request(detailsOptions).then((res) => res.data);
  };

  axios
    .request(similarOptions)
    .then((res) => {
      const similarPromises = similarHandler(res.data).map((titleID) =>
        similarRequest(titleID)
      );

      Promise.all(similarPromises).then((similarData) =>
        dispatch(setSimilar(similarData))
      );
    })
    .catch((err) => console.error(err));
};

export const getVideosOnModal = (id, dispatch) => {
  const options = {
    ...base,
    url: "https://imdb8.p.rapidapi.com/title/get-videos",
    params: { tconst: id, limit: "3", region: "US" },
  };

  axios
    .request(options)
    .then((res) => dispatch(setVideos(res.data.resource.videos)))
    .catch((err) => console.error(err));
};

export const getFullDetails = async (id, dispatch) => {
  await dispatch(stateReset(reset));

  await getDetailesOnTitle(id, dispatch);
  await getPhotosOnTitle(id, dispatch);
  await getAwardsOnTitle(id, dispatch);

  const delayedSimilar = () => getSimilarOnTitle(id, dispatch);
  setTimeout(delayedSimilar, 1200);
};

export const tempSwitch = (dispatch) => {
  dispatch(stateReset(reset));

  const delayed = () => {
    dispatch(stateReset(initialState));
  };

  setTimeout(delayed, 2000);
};
