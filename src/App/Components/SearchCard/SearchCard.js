import { Link } from "react-router-dom";
import styled from "styled-components";

import { RatingLabel } from "../RatingLabel/RatingLabel";
import { colors } from "../../../ui";
import nocover from "../../../assets/images/nocover.png";

const LinkStyled = styled(Link)`
  display: flex;
  width: 555px;
  height: 171px;
  margin-bottom: 20px;
  padding: 15px 20px 15px 15px;
  text-decoration: none;
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
    width: calc(100% - 95px - 87px);
    margin-top: 15px;
    padding: 0 20px;

    .filmtitle {
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      color: ${colors.fontWhiteFE};
      text-overflow: ellipsis;
    }

    .tags {
      margin-bottom: 30px;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: ${colors.fontWhiteFB};
    }

    .awards {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      color: ${colors.fontWhiteFB};
    }
  }

  .rating {
    flex-shrink: 0;
    margin-top: 15px;
  }
`;

export const SearchCard = ({ data }) => {
  if (data.Response === "False") return <div></div>;

  return (
    <LinkStyled to={`/details/${data.imdbID}`}>
      <img
        className="cover"
        src={!data.Poster || data.Poster === "N/A" ? nocover : data.Poster}
        alt="Cover"
      />

      {/* {data.Response === "True" && (
        <> */}
      <div className="info">
        <div className="filmtitle">{data.Title}</div>
        <div className="tags">{`${data.Type} | ${data.Genre} | ${data.Year}`}</div>
        <div className="awards">{data.Awards === "N/A" ? "" : data.Awards}</div>
      </div>

      <div className="rating">
        <RatingLabel rating={data.imdbRating} />
      </div>
      {/* </>
      )} */}

      {/* {data.Response === "False" && (
        <div className="info">
          <div className="filmtitle">No data</div>
        </div>
      )} */}
    </LinkStyled>
  );
};
