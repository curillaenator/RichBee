import React, { FC, useState, FormEvent } from "react";
import styled from "styled-components";

import { getDataOnSearch } from "../../../Reducers/app";

import { colors, model, Colors } from "../../../ui";

interface FormStyledProps {
  colors: Colors;
  height: number;
}

const FormStyled = styled.form<FormStyledProps>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 555px;
  height: ${({ height }) => height}px;
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
    color: ${({ colors }) => colors.fontWhiteFE};
    background-color: ${({ colors }) => colors.bgButton};

    &:hover {
      background-color: ${({ colors }) => colors.bgButtonHover};
    }

    &:active {
      background-color: ${({ colors }) => colors.bgButton};
    }
  }
`;

interface SearchProps {
  dispatch: any;
}

export const Search: FC<SearchProps> = ({ dispatch }) => {
  const [searchString, setSearchString] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    getDataOnSearch(searchString, dispatch);
  };

  return (
    <FormStyled onSubmit={submit} height={50} colors={colors}>
      <input
        type="text"
        className="textinput"
        placeholder={model.searchPage.placeholder}
        autoComplete="off"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />

      <button className="button" type="submit">
        Search
      </button>
    </FormStyled>
  );
};
