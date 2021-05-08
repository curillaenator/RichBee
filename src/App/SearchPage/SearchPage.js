import styled from "styled-components";

import { VideoBG } from "../Components/VideoBG/VideoBG";
import { Search } from "../Components/Search/Search";

const SearchPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 22vh 0 0 0;
  background-color: ${(props) => props.colors.bgDark};

  .title {
    max-width: 728px;
    margin: 0 24px 40px;
    font-weight: 900;
    font-size: 64px;
    line-height: 78px;
    text-align: center;
    color: ${(props) => props.colors.fontWhiteFE};
    z-index: 20;
  }

  .subtitle {
    max-width: 728px;
    margin: 0 24px 80px;
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    text-align: center;
    color: ${(props) => props.colors.fontWhiteFE};
    z-index: 20;
  }
`;

export const SearchPage = ({ state, dispatch }) => {
  return (
    <SearchPageStyled colors={state.pallete}>
      {/* <VideoBG /> */}

      <div className="title">{state.ui.searchTitle}</div>

      <div className="subtitle">{state.ui.searchSubtitle}</div>

      <Search state={state} />
    </SearchPageStyled>
  );
};
