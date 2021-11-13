import React from "react";
import styled from "styled-components";

import { colors } from "../../../ui";

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

  & > img {
    cursor: pointer;
    transition: 0.08s linear;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }
`;

const PlayerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 854px;
  height: 480px;
  background-color: ${colors.bgDark};
  color: ${colors.fontWhiteFB};
`;

const ModalStyled = styled.div`
  width: 100%;
`;

export const Modal = ({ close, title, link }) => {
  return (
    <ModalStyled>
      <TitleStyled>
        <div>{title}</div>

        <img src={cross} alt="Close" onClick={close} />
      </TitleStyled>

      <PlayerStyled>
        {link && (
          <iframe
            title="trailer"
            src={`${link}?autoplay=false&width=854`}
            width="854"
            height="480"
            allowFullScreen={true}
            frameBorder="no"
            scrolling="no"
          ></iframe>
        )}

        {!link && <div>No trailer found</div>}
      </PlayerStyled>
    </ModalStyled>
  );
};
