import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RatingLabel } from "../Components/RatingLabel/RatingLabel";
import { Button } from "../Components/Buttons/Button";

import { colors } from "../../ui";

import mglass from "../../assets/icons/mglass.svg";
import bgmage from "../../assets/images/cover.jpg";

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
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .block {
    &_label {
      max-width: calc(100% / 2);
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
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: ${colors.fontWhiteFB};
    }

    &_buttons {
      margin-bottom: 50px;
    }

    &_info {
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
  height: 100vh;

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
  }
`;

const FooterSection = styled.section``;

const DetailsPageStyled = styled.div`
  min-width: 1280px;
`;

export const DetailsPage = ({ state, dispatch }) => {
  const { id } = useParams();
  return (
    <DetailsPageStyled>
      <HeaderSection>
        <div className="header_title">Richbee Shows</div>
        <div className="header_search">
          <img src={mglass} alt="" />
          <p>Type here smth...</p>
        </div>
      </HeaderSection>

      <PreviewSection image={bgmage}>
        <div className="block">
          <div className="block_label">The Queen's Gambit</div>

          <div className="block_tagline">
            <RatingLabel />
            <div className="tags">Drama | TVSeries | 2020</div>
          </div>
        </div>

        <div className="block">
          <div className="block_buttons">
            <Button title="Watch" />
          </div>

          <div className="block_info">
            Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19
            nominations.
          </div>
        </div>
      </PreviewSection>

      <ExtendedSection>
        <div className="description">
          <div className="description_label">
            Watch The Queen's Gambit on Richbee Shows
          </div>

          <div className="description_text">
            Nine year-old orphan Beth Harmon is quiet, sullen, and by all
            appearances unremarkable. That is, until she plays her first game of
            chess. Her senses grow sharper, her thinking clearer, and for the
            first time in her life she feels herself fully in control. By the
            age of sixteen, she's competing for the U.S. Open championship. But
            as Beth hones her skills on the professional circuit, the stakes get
            higher, her isolation grows more frightening, and the thought of
            escape becomes all the more tempting. Based on the book by Walter
            Tevis.
          </div>
        </div>

        <div className="similar"></div>
      </ExtendedSection>

      <section className="footer"></section>
    </DetailsPageStyled>
  );
};
