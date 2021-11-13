import React from "react";
import styled from "styled-components";
import process from "../../../assets/images/process.svg";
import { colors } from "../../../ui";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.fontWhiteFB};

  & > img {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    object-fit: cover;
  }
`;

const LoaderSmallStyled = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.fontWhiteFB};

  & > img {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    object-fit: cover;
  }
`;

export const Loader = () => {
  return (
    <LoaderStyled>
      <img src={process} alt="Now" />
      <div>loading...</div>
    </LoaderStyled>
  );
};

export const LoaderSmall = () => {
  return (
    <LoaderSmallStyled>
      <img src={process} alt="Now " />
      <div>loading...</div>
    </LoaderSmallStyled>
  );
};
