import styled from "styled-components";

import { RatingLabel } from "../RatingLabel/RatingLabel";
import { colors } from "../../../ui";

import cover from "../../../assets/images/cover.jpg";

const CardWrapper = styled.div`
  display: flex;
  width: 555px;
  height: 171px;
  margin-bottom: 20px;
  padding: 15px 20px 15px 15px;
  background-color: ${colors.bgDark};
  opacity: 0.8;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.08s linear;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${colors.bgDarkGray};
  }

  &:active {
    background-color: ${colors.bgDark};
  }

  .cover {
    flex-shrink: 0;
    width: 95px;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .info {
    margin: 0 20px;
    padding-top: 15px;

    .filmtitle {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      color: ${colors.fontWhiteFE};
    }

    .tags {
      margin-bottom: 30px;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: ${colors.fontWhiteFB};
    }

    .description {
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      color: ${colors.fontWhiteFB};
    }
  }

  .rating {
    flex-shrink: 0;
    padding-top: 15px;
  }
`;

export const SearchCard = ({ carddata }) => {
  return (
    <CardWrapper>
      <img className="cover" src={cover} alt="Cover" />

      <div className="info">
        <div className="filmtitle">The Queen's Gambit</div>
        <div className="tags">TVSeries | Drama | 2020</div>
        <div className="description">
          Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19
          nominations.
        </div>
      </div>

      <div className="rating">
        <RatingLabel rating="IMDb 8.8" />
      </div>
    </CardWrapper>
  );
};
