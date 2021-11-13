import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 860px;
  overflow: hidden;

  .scale {
    position: absolute;
    top: 0;
    left: 50%;
    width: ${(props) =>
      props.height > 830 ? 1.78 * props.height : 1.78 * 830}px;
    height: ${(props) => (props.height > 830 ? props.height : 830)}px;
    transform: translateX(-50%) scale(1.35);

    .videoplayer {
      width: 100%;
      height: 100%;
    }
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
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const heighter = () => setHeight(window.innerHeight);

    window.addEventListener("resize", heighter);
    return () => window.removeEventListener("resize", heighter);
  }, []);

  return (
    <BgWrapper height={height}>
      <div className="scale">
        <ReactPlayer
          className="videoplayer"
          url="https://www.youtube.com/watch?v=gA0nQyDZR4A"
          width="100%"
          height="100%"
          playing
          muted
          loop
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
      </div>
    </BgWrapper>
  );
};
