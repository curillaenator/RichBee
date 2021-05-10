import { Form, Field } from "react-final-form";
import styled from "styled-components";

import { getDataOnSearch } from "../../../Reducers/app";

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 555px;
  height: ${(props) => props.height}px;
  margin-bottom: 20px;
  z-index: 20;

  .textinput {
    width: calc(100% - 121px);
    height: 100%;
    padding: 0 28px;
    border-radius: 25px 0 0 25px;
  }

  .button {
    width: 121px;
    height: 100%;
    border-radius: 0 25px 25px 0;
    color: ${(props) => props.colors.fontWhiteFE};
    background-color: ${(props) => props.colors.bgButton};

    &:hover {
      background-color: ${(props) => props.colors.bgButtonHover};
    }

    &:active {
      background-color: ${(props) => props.colors.bgButton};
    }
  }
`;

export const Search = ({ state, dispatch, colors, placeholder }) => {
  const onSubmit = (searchData) => getDataOnSearch(searchData.search, state.search, dispatch);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, values }) => {
        return (
          <FormStyled
            onSubmit={handleSubmit}
            height={50}
            colors={colors}
          >
            <Field
              name="search"
              component="input"
              className="textinput"
              autoComplete="off"
              placeholder={placeholder}
            />

            <button className="button">Search</button>
          </FormStyled>
        );
      }}
    ></Form>
  );
};
