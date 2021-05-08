const DUMMY = "app/DUMMY";

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
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case DUMMY:
      return { ...state };

    default:
      return state;
  }
};
