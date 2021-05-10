import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import { colors } from "../../../ui";

import play from "../../../assets/icons/play.svg";
import cross from "../../../assets/icons/cross.svg";

const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: ${colors.fontWhiteFB};

  .backtovideos {
    cursor: pointer;
    transition: 0.08s linear;

    &:hover {
      transform: scale(1.05);
    }

    &: active {
      transform: scale(1);
    }
  }

  & > img {
    cursor: pointer;
    transition: 0.08s linear;

    &:hover {
      transform: scale(1.2);
    }

    &: active {
      transform: scale(1);
    }
  }
`;

const SelectStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .thumb {
    cursor: pointer;
    position: relative;
    width: calc(100% / 3 - 48px / 2);
    height: 0;
    padding-top: calc(56.25% / 3);
    background-color: ${colors.bgDark};

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${colors.cardHover};
      background-image: url(${play});
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      transition: 0.08s linear;
    }

    &:hover::after {
      opacity: 1;
    }

    &:active::after {
      opacity: 0.65;
    }

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const PlayerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-bottom: 24px;
  padding-top: 56.25%;
  background-color: ${colors.bgDark};

  .videoplayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ModalStyled = styled.div`
  width: 100%;
`;

export const Modal = ({ close, videos }) => {
  const [isPlayer, setIsPlayer] = useState(null);

  const url = "https://www.youtube.com/watch?v=naQr0uTrH_s";

  const handleVideo = (videoID) => {
    setIsPlayer(!isPlayer);
  };

  console.log(videos);
  return (
    <ModalStyled>
      <TitleStyled>
        {!isPlayer && <div>Trailers & Promos</div>}

        {isPlayer && (
          <div className="backtovideos" onClick={() => handleVideo(null)}>
            Back to videos
          </div>
        )}

        <img src={cross} alt="Close" onClick={close} />
      </TitleStyled>

      {isPlayer && (
        <PlayerStyled>
          <ReactPlayer
            className="videoplayer"
            url={url}
            width="100%"
            height="100%"
            controls={true}
          />
        </PlayerStyled>
      )}

      {!isPlayer && (
        <SelectStyled>
          {videos.map((video) => (
            <div
              className="thumb"
              key={video.id}
              onClick={() => handleVideo(video.id)}
            >
              <img src={video.image.url} alt="" />
            </div>
          ))}
        </SelectStyled>
      )}
    </ModalStyled>
  );
};
