import styled from "styled-components";

export const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 1em;
  a {
    text-decoration: none;
    color: black;
  }
  a:active {
    color: black;
  }
`;

export const NewPostWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
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

export const Textarea = styled.textarea`
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

export const Button = styled.button`
  box-shadow: 0 0 0 1px #21ba45 inset;
  color: #21ba45;
  font-size: 1rem;
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
  &:hover:enabled {
    cursor: pointer;
    color: #fff;
    background-color: #21ba45;
    letter-spacing: 0.05em;
  }
  &:active:enabled {
    background-color: grey;
  }
  &:disabled {
    color: lightgrey;
    box-shadow: 0 0 0 1px lightgrey inset;
  }
`;
