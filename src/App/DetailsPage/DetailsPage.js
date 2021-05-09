import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  getDetailesOnTitle,
  getPhotosOnTitle,
  getAwardsOnTitle,
} from "../../Reducers/app";

import { RatingLabel } from "../Components/RatingLabel/RatingLabel";
import { Button } from "../Components/Buttons/Button";
import { SimilarCard } from "../Components/SimilarCard/SimilarCard";

import { model, colors } from "../../ui";

import mglass from "../../assets/icons/mglass.svg";

const TagStyled = styled.div`
  padding: 0 24px;
  border-right: 2px solid ${colors.fontWhiteFB};
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.fontWhiteFB};

  &:last-child {
    border-right: 0;
  }
`;
const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 150px;

  .header_title {
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    color: ${colors.fontWhiteFE};
  }

  .header_search {
    display: flex;
    align-items: center;
    width: 420px;
    height: 50px;
    padding: 0 29.97px;
    border-radius: 25px;
    background-color: ${colors.bgDarkGray};

    & > img {
      margin-right: 18px;
    }

    & > p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      color: ${colors.fontGray};
    }
  }
`;
const PreviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 120px 150px 100px;
  height: calc(100vh - 100px);
  min-height: 760px;
  background: linear-gradient(90.3deg, #111111 19%, rgba(17, 17, 17, 0) 99.75%),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .block {
    &_label {
      max-width: 70%;
      min-width: 555px;
      margin-bottom: 30px;
      font-size: 72px;
      font-weight: 900;
      line-height: 88px;
      color: ${colors.fontWhiteFB};
    }

    &_tagline {
      display: flex;
      align-items: center;
    }

    &_buttons {
      margin-bottom: 50px;
    }

    &_awards {
      max-width: calc(100% / 2 - 150px);
      min-width: 400px;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      color: ${colors.fontWhiteFB};
    }
  }
`;
const ExtendedSection = styled.section`
  width: 100%;
  padding: 60px 150px;
  background-color: ${colors.bgWhite};

  .description {
    width: 100%;
    max-width: 800px;
    min-width: 555px;
    margin-bottom: 60px;
    color: ${colors.fontBlack};

    &_label {
      margin-bottom: 30px;
      font-weight: 900;
      font-size: 36px;
      line-height: 52px;
    }

    &_text {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  }

  .similar {
    &_label {
      width: 100%;
      max-width: 800px;
      min-width: 555px;
      margin-bottom: 19px;
      font-weight: 900;
      font-size: 24px;
      line-height: 52px;
      color: ${colors.fontBlack};
    }

    &_cards {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 150px;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;

  color: ${colors.fontWhiteFE};
`;
const DetailsPageStyled = styled.div`
  min-width: 1280px;
`;

export const DetailsPage = ({ state, dispatch }) => {
  const { curDetails, photos, awards } = state;
  const { id } = useParams();

  const maxResolution = Math.max.apply(
    null,
    photos.images.map((p) => p.width)
  );

  const bestPhoto = photos.images.find((p) => p.width === maxResolution);

  useEffect(() => {
    if(id) {
      getDetailesOnTitle(id, dispatch);
      getPhotosOnTitle(id, dispatch);
      getAwardsOnTitle(id, dispatch);
    }
  }, [id, dispatch]);

  if (!curDetails || !photos || !awards) return <div>Загрузка...</div>;

  return (
    <DetailsPageStyled>
      <HeaderSection>
        <div className="header_title">Richbee Shows</div>
        <div className="header_search">
          <img src={mglass} alt="" />
          <p>Type here smth...</p>
        </div>
      </HeaderSection>

      <PreviewSection image={bestPhoto.url}>
        <div className="block">
          <div className="block_label">{curDetails.title.title}</div>

          <div className="block_tagline">
            <RatingLabel rating={curDetails.ratings.rating} />

            <TagStyled>{curDetails.title.titleType}</TagStyled>

            {curDetails.genres.map((genre) => (
              <TagStyled key={genre}>{genre}</TagStyled>
            ))}

            <TagStyled>{curDetails.title.year}</TagStyled>
          </div>
        </div>

        <div className="block">
          <div className="block_buttons">
            <Button title="Watch" />
          </div>

          <div className="block_awards">
            {`${awards.awardsSummary.highlighted.isWinner ? "Won" : ""} ${
              awards.awardsSummary.highlighted.awardName
            } | ${
              awards.awardsSummary.highlighted.count
            } ${"Nominations"}`}{" "}
            <br />
            {`Another ${awards.awardsSummary.otherWinsCount} wins & ${awards.awardsSummary.otherNominationsCount} nominations`}
          </div>
        </div>
      </PreviewSection>

      <ExtendedSection>
        <div className="description">
          <div className="description_label">
            {`Watch ${curDetails.title.title} on Richbee Shows`}
          </div>

          <div className="description_text">{curDetails.plotSummary.text}</div>
        </div>

        <div className="similar">
          <div className="similar_label">{model.detailsPage.similar}</div>

          <div className="similar_cards">
            {[1, 2, 3, 4].map((data) => (
              <SimilarCard key={data} />
            ))}
          </div>
        </div>
      </ExtendedSection>

      <FooterSection className="footer">Richbee Shows</FooterSection>
    </DetailsPageStyled>
  );
};
