import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { RatingLabel } from "../RatingLabel/RatingLabel";
import { colors } from "../../../ui";

const CardStyled = styled(Link)`
  position: relative;
  cursor: pointer;
  width: calc(100% / 4 - 90px / 4);

  .cover_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 137%;
    object-fit: cover;

    .hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 30px 30px;
      border-radius: 16px;
      background-color: ${colors.cardHover};
      color: ${colors.fontWhite};
      opacity: 0;
      transition: 0.08s linear;

      &_title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 8px;
      }

      &_genre {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 8px;
      }

      &_type {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 21px;
      }

      &_description {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 16px;
      }
    }

    &:hover .hover {
      opacity: 1;
    }

    &:active .hover {
      background-color: ${colors.cardActive};
    }

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
  }

  @media (min-width: 1440px) {
    .cover_wrap {
      .hover {
        padding: 37px 30px;

        &_description {
          -webkit-line-clamp: 6;
        }
      }
    }
  }

  @media (min-width: 1600px) {
    .cover_wrap {
      .hover {
        &_description {
          -webkit-line-clamp: 8;
        }
      }
    }
  }
`;

export const SimilarCard = ({ data }) => {
  return (
    <CardStyled to={`/details/${data.id}`}>
      <div className="cover_wrap">
        <img className="cover_img" src={data.image} alt="Cover" />

        <div className="hover">
          <div className="hover_title">{data.title}</div>

          <div className="hover_genre">{data.genres}</div>

          <div className="hover_type">{data.year}</div>

          <div className="hover_description">{data.plot}</div>

          <RatingLabel rating={data.imDbRating} />
        </div>
      </div>
    </CardStyled>
  );
};
