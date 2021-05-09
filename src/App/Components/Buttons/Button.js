import styled from "styled-components";
import { colors } from "../../../ui";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 69px;
  border: 2px solid ${colors.fontWhiteFB};
  border-radius: 32px;
  background: ${colors.bgDark};
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: ${colors.fontWhiteFB};
`;

export const Button = ({
  title = "",
  handler = () => console.log("emptyHandler"),
}) => {
  return <StyledButton onClick={handler}>{title}</StyledButton>;
};
