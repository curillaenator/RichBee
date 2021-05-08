import styled from "styled-components";

const ButtonWrapper = styled.button``;

export const SearchButton = ({ title = "", handler = () => {} }) => {
  return (
    <ButtonWrapper onClick={handler}>
      <div className="title">{title}</div>
    </ButtonWrapper>
  );
};
