import styled from "styled-components";

import { VideoBG } from "../Components/VideoBG/VideoBG";
import { Search } from "../Components/Search/Search";
import { SearchCard } from "../Components/SearchCard/SearchCard";
import { model, colors } from "../../ui";

const SearchPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;

  padding: 22vh 0;
  background-color: ${colors.bgDark};

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
    color: ${colors.fontWhiteFE};
    z-index: 20;
  }

  .subtitle {
    max-width: 728px;
    margin: 0 24px 80px;
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    text-align: center;
    color: ${colors.fontWhiteFE};
    z-index: 20;
  }

  .matches {
    margin-bottom: 20px;
    color: ${colors.fontWhiteFE};
    z-index: 20;
  }

  .results {
    z-index: 20;
  }
`;

export const SearchPage = ({ state, dispatch }) => {
  return (
    <SearchPageStyled>
      <VideoBG />

      <div className="title">{model.searchPage.title}</div>

      <div className="subtitle">{model.searchPage.subtitle}</div>

      <Search
        dispatch={dispatch}
        colors={colors}
        placeholder={model.searchPage.placeholder}
      />

      {state.searchRes && (
        <div className="matches">{`${state.searchRes.d.length} ${model.searchPage.found} "${state.searchRes.q}"`}</div>
      )}

      {state.searchRes && (
        <div className="results">
          {state.searchRes.d.map((data) => (
            <SearchCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </SearchPageStyled>
  );
};
