import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import styled, { keyframes } from "styled-components";

import { getTitleMeta, tempSwitch } from "../../Reducers/app";

import { Loader } from "../Components/Loader/Loader";
import { StyledButton } from "../Components/Buttons/Buttons";
import { Modal } from "../Components/Modal/Modal";
import { RatingLabel } from "../Components/RatingLabel/RatingLabel";
import { SimilarCard } from "../Components/SimilarCard/SimilarCard";

import { model, colors } from "../../ui";

import mglass from "../../assets/icons/mglass.svg";

// import tmpimg from "../../assets/images/tmp.jpg";

// ANIMATIONS

const modalAppear = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

// STYLES

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
const StyledPopup = styled(Popup)`
  &-overlay {
    width: 100vw;
    height: 100vh;
    background-color: ${colors.cardHover};
    animation: ${modalAppear} 0.12s linear;
  }

  &-content {
    width: 70%;
    padding: 24px;
    border-radius: 16px;
    background-color: ${colors.cardActive};
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
  min-height: 830px;
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
      max-width: calc(100% / 2);
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

// MAIN COMPONENT

export const DetailsPage = ({ state, dispatch }) => {
  const { details, similar, videos } = state;
  const history = useHistory();
  const { id } = useParams();

  // useEffect(() => id && tempSwitch(dispatch), [id, dispatch]);

  useEffect(() => id && getTitleMeta(id, dispatch), [id, dispatch]);

  // if (!id) return history.push("/");

  const onModalOpen = () => {
    // if (!videos) return getVideosOnModal(id, dispatch);
  };

  if (!details || !similar) return <Loader />;

  return (
    <DetailsPageStyled>
      <HeaderSection>
        <div className="header_title">Richbee Shows</div>
        <div className="header_search">
          <img src={mglass} alt="" />
          <p>Type here smth...</p>
        </div>
      </HeaderSection>

      <PreviewSection image={details.Poster}>
        <div className="block">
          <div className="block_label">{details.Title}</div>

          <div className="block_tagline">
            <RatingLabel rating={details.imdbRating} />

            <TagStyled>{details.Type}</TagStyled>

            {details.Genre.split(", ").map((genre) => (
              <TagStyled key={genre}>{genre}</TagStyled>
            ))}

            <TagStyled>{details.Year}</TagStyled>
          </div>
        </div>

        <div className="block">
          <div className="block_buttons">
            <StyledPopup
              trigger={<StyledButton>Watch</StyledButton>}
              modal
              lockScroll
              closeOnDocumentClick
              onOpen={onModalOpen}
            >
              {(close) => <Modal close={close} videos={videos} />}
            </StyledPopup>
          </div>

          <div className="block_awards">{details.Awards}</div>
        </div>
      </PreviewSection>

      <ExtendedSection>
        <div className="description">
          <div className="description_label">
            {`Watch ${details.Title} on Richbee Shows`}
          </div>

          <div className="description_text">{details.Plot}</div>
        </div>

        <div className="similar">
          <div className="similar_label">{model.detailsPage.similar}</div>

          <div className="similar_cards">
            {similar.map((data) => (
              <SimilarCard key={data.imdbID} data={data} />
            ))}
          </div>
        </div>
      </ExtendedSection>

      <FooterSection className="footer">Richbee Shows</FooterSection>
    </DetailsPageStyled>
  );
};
