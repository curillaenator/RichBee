import styled from "styled-components";

import { VideoBG } from "../Components/VideoBG/VideoBG";
import { Search } from "../Components/Search/Search";
import { SearchCard } from "../Components/SearchCard/SearchCard";

import bgimage from "../../assets/images/cover.jpg";

const SearchPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 22vh 0 0 0;
  background-color: ${(props) => props.colors.bgDark};

  .tempbg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    opacity: 0.3;
  }

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

  .results {
  }
`;

export const SearchPage = ({ state, dispatch }) => {
  return (
    <SearchPageStyled colors={state.pallete}>
      <VideoBG />
      {/* <img className="tempbg" src={bgimage} alt="" /> */}

      <div className="title">{state.ui.searchTitle}</div>

      <div className="subtitle">{state.ui.searchSubtitle}</div>

      <Search state={state} dispatch={dispatch} />

      <div className="results">
        <SearchCard />
      </div>
    </SearchPageStyled>
  );
};
