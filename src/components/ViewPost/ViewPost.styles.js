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
  &:hover {
    color: #fff;
    background-color: #21ba45;
  }
  &:active {
    background-color: grey;
  }
  &:disabled {
    background-color: yellow;
  }
`;

export const ButtonSave = styled(ButtonEdit)``;

export const Title = styled.div`
  font-style: italic;
  font-size: 1em;
  margin: 0.5em 0;
`;

export const Body = styled.div`
  margin-left: 0.5em;
  margin-bottom: 1em;
`;
