import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

//padding-top: 41.67%;

const BgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  transform: translateY(-50%);
  overflow: hidden;

  .videoplayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale3d(1.38, 1.38, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #111111;
    opacity: 0.7;
    z-index: 10;
  }
`;

export const VideoBG = () => {
  return (
    <BgWrapper>
      <ReactPlayer
        className="videoplayer"
        url="https://www.youtube.com/watch?v=gA0nQyDZR4A"
        width="100%"
        height="100%"
        playing
        muted
        loop
        // onReady={onReady}
        config={{
          youtube: {
            playerVars: {
              rel: 0,
              showinfo: 0,
              frameborder: 0,
              iv_load_policy: 3,
              keyboard: 1,
              autohide: 1,
              modestbranding: 1,
              fs: 0,
            },
          },
        }}
      />
    </BgWrapper>
  );
};
