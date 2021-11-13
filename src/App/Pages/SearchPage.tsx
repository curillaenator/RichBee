import React, { FC, Dispatch } from "react";
import styled from "styled-components";

// import { StyledButton } from "../Components/Buttons/Buttons";
import { LoaderSmall } from "../Components/Loader/Loader";
import { VideoBG } from "../Components/VideoBG/VideoBG";
import { Search } from "../Components/Search/Search";
import { SearchCard } from "../Components/SearchCard/SearchCard";

import { IS } from "../../Reducers/app"; // getMoreSearchResults

import { model, colors } from "../../ui";

const SearchPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  min-height: 930px;
  padding: 22vh 0;
  background-color: ${colors.bgDark};

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

  .searchedfor {
    margin-bottom: 20px;
    color: ${colors.fontWhiteFE};
    z-index: 20;
  }

  .results {
    margin-bottom: 40px;
    z-index: 20;
  }

  .message {
    margin-bottom: 40px;
    color: ${colors.fontWhiteFE};
    z-index: 20;
  }

  .loading {
    margin-bottom: 40px;
    z-index: 20;
  }

  .buttons {
    display: flex;
    justify-content: center;
    z-index: 20;
  }
`;

interface SearchPageProps {
  state: IS;
  dispatch: Dispatch<any>;
}

export const SearchPage: FC<SearchPageProps> = ({ state, dispatch }) => {
  const { isSearching, searchRes, lastSearch } = state;

  return (
    <SearchPageStyled>
      <VideoBG />

      <div className="title">{model.searchPage.title}</div>

      <div className="subtitle">{model.searchPage.subtitle}</div>

      <Search dispatch={dispatch} />

      {!isSearching && lastSearch && (
        <div className="searchedfor">{`${model.searchPage.userQueryWas} "${lastSearch}"`}</div>
      )}

      {searchRes.length > 0 && (
        <div className="results">
          {searchRes.map((data, i) => (
            <SearchCard key={i} data={data} />
          ))}
        </div>
      )}

      {/* {!isSearching && searchRes.length > 0 && (
        <div className="message">
          {searchRes.length < searchResIDs.length
            ? `${model.searchPage.seeMore}`
            : `${model.searchPage.allShown}`}
        </div>
      )} */}

      {!isSearching && lastSearch && searchRes.length === 0 && (
        <div className="message">{model.searchPage.noResults}</div>
      )}

      {isSearching && (
        <div className="loading">
          <LoaderSmall />
        </div>
      )}

      {/* {searchRes.length > 0 && searchRes.length < searchResIDs.length && (
        <div className="buttons">
          <StyledButton
            disabled={isSearching}
            onClick={() =>
              getMoreSearchResults(searchRes, searchResIDs, search, dispatch)
            }
          >
            Load more...
          </StyledButton>
        </div>
      )} */}
    </SearchPageStyled>
  );
};
