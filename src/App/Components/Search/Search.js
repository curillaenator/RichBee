import { Form, Field } from "react-final-form";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 38.5%;
  max-width: 555px;
  min-width: 440px;
  height: ${(props) => props.height}px;
  z-index: 20;

  .textinput {
    width: calc(100% - 121px);
    height: 100%;
    padding: 0 28px;
    border-radius: 25px 0 0 25px;
  }

  .button {
    width: 121px;
    height: 100%;
    border-radius: 0 25px 25px 0;
    color: ${(props) => props.colors.fontWhiteFE};
    background-color: ${(props) => props.colors.bgButton};

    &:hover {
      background-color: ${(props) => props.colors.bgButtonHover};
    }

    &:active {
      background-color: ${(props) => props.colors.bgButton};
    }
  }
`;

export const Search = ({ state }) => {
  const onSubmit = (searchData) => console.log(searchData);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, values }) => (
        <FormStyled onSubmit={handleSubmit} height={50} colors={state.pallete}>
          <Field
            name="search"
            component="input"
            className="textinput"
            autocomplete="off"
            placeholder={state.ui.searchPlaceholder}
          />

          <button className="button">Search</button>
        </FormStyled>
      )}
    ></Form>
  );
};
