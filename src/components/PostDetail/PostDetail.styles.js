import styled from "styled-components";

export const ViewPostWrap = styled.div``;

export const Author = styled.div`
  display: inline-block;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
  margin-right: 0.5em;
  line-height: 1.2;
`;

export const CreateDate = styled.span`
  display: inline-block;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.8em;
  line-height: 1.2;
`;

export const ButtonEdit = styled.button`
  box-shadow: 0 0 0 1px #21ba45 inset;
  color: #21ba45;
  font-size: 0.8em;
  cursor: pointer;
  outline: 0;
  border: none;
  background: none;
  padding: 0.25em 1em;
  font-weight: normal;
  line-height: 1.2;
  text-align: center;
  border-radius: 0.3rem;
  transition: all 0.25s ease;
  margin-left: 1em;
  :hover:enabled {
    color: #fff;
    background-color: #21ba45;
  }
  &:active:enabled {
    background-color: grey;
  }
  &:disabled {
    cursor: initial;
    color: lightgrey;
    box-shadow: 0 0 0 1px lightgrey inset;
  }
`;

export const ButtonSave = styled(ButtonEdit)``;

export const Title = styled.div`
  font-style: italic;
  font-size: 1em;
  margin: 0.5em 0;
  span {
    font-style: normal;
  }
`;

export const Body = styled.div`
  margin-left: 0.5em;
  margin: 0 0 1em 1em;
`;

export const InputEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
`;

export const InputTitle = styled.input`
  flex: 1 0 auto;
  max-width: 100%;
  padding: 0.5em;
  margin-bottom: 0.25em;
  outline: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.9);
  border-radius: 0.3em;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  &:focus {
    border-color: #85b7d9;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const InputBody = styled.textarea`
  padding: 0.5em;
  margin-bottom: 1em;

  outline: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.3em;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  &:focus {
    border-color: #85b7d9;
    color: rgba(0, 0, 0, 0.8);
  }
`;
