import styled from "styled-components";

export const CreateCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyComment = styled.textarea`
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

export const ButtonCreate = styled.button`
  box-shadow: 0 0 0 1px #21ba45 inset;
  color: #21ba45;
  font-size: 1rem;
  cursor: pointer;
  min-height: 1em;
  outline: 0;
  border: none;
  background: none;
  padding: 0.75em 1.5em;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
  border-radius: 0.3rem;
  transition: all 0.25s ease;
  &:hover {
    color: #fff;
    background-color: #21ba45;
    letter-spacing: 0.05em;
  }
  &:active {
    background-color: grey;
  }
`;
