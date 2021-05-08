import { useReducer } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { SearchPage } from "./SearchPage/SearchPage";

import { appReducer, initialState } from "../Reducers/app";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log(state);

  return (
    <AppContainer>
      <Route
        to="/"
        render={() => <SearchPage state={state} dispatch={dispatch} />}
      />
    </AppContainer>
  );
};
