import { useReducer } from "react";
import { Switch, Route } from "react-router-dom";

import { SearchPage } from "./SearchPage/SearchPage";
import { DetailsPage } from "./DetailsPage/DetailsPage";

import { appReducer, initialState } from "../Reducers/app";

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log(state);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <SearchPage state={state} dispatch={dispatch} />}
      />
      <Route
        path="/details/:id"
        render={() => <DetailsPage state={state} dispatch={dispatch} />}
      />
    </Switch>
  );
};
