import styled from "styled-components";
import { colors } from "../../../ui";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 69px;
  border: 2px solid
    ${(props) => (props.disabled ? colors.fontGray : colors.fontWhiteFB)};
  border-radius: 32px;
  background-color: ${colors.bgDark};
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: ${(props) => (props.disabled ? colors.fontGray : colors.fontWhiteFB)};
  opacity: 0.8;
  transition: 0.08s linear;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? colors.bgDark : colors.bgDarkGray};
    transform: scale(${(props) => (props.disabled ? "1" : "1.04")});
  }

  &:active {
    background-color: ${colors.bgDark};
    transform: scale(1);
  }
`;
