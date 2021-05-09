import { useReducer } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { SearchPage } from "./SearchPage/SearchPage";
import { DetailsPage } from "./DetailsPage/DetailsPage";

import { appReducer, initialState } from "../Reducers/app";

const AppContainer = styled.div``;

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log(state);

  return (
    <AppContainer>
      <Route
        exact
        path="/"
        render={() => <SearchPage state={state} dispatch={dispatch} />}
      />
      <Route
        path="/details/:id"
        render={() => <DetailsPage state={state} dispatch={dispatch} />}
      />
    </AppContainer>
  );
};
