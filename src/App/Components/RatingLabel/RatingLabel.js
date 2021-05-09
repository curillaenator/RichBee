import styled from "styled-components";
import { colors } from "../../../ui";

const RatingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 30px;
  border-radius: 8px;
  background-color: ${colors.bgRating};
  font-weight: 900;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.fontVantaBlack};
`;

export const RatingLabel = ({ rating }) => (
  <RatingWrap>{`IMDb ${rating}`}</RatingWrap>
);
