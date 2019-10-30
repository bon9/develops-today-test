import styled from "styled-components";

export const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  transition: all 0.5s ease;
  padding: 0.25em;
  box-shadow: 0 0 2px 2px transparent;
`;

export const Data = styled.div`
  flex-grow: 1;
  margin-right: 1em;
  padding: 0.5em;
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0 0 2px 2px lightgrey;
    border-radius: 0.3em;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
    display: block;
    width: 100%;
  }
  a:active {
    color: black;
  }
`;

export const Author = styled.div`
  display: inline-block;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
  margin-right: 0.5em;
  line-height: 1.2;
`;

export const PublishDate = styled.span`
  display: inline-block;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.75em;
  line-height: 1.2;
`;

export const Description = styled.p`
  margin-left: 0.5em;
  text-decoration: none;
`;

export const DeleteButton = styled.button`
  align-self: center;
  box-shadow: 0 0 0 1px red inset;
  color: red;
  font-size: 0.8rem;
  outline: 0;
  border: none;
  background: none;
  padding: 0.4em 1em;
  text-align: center;
  border-radius: 0.3rem;
  transition: all 0.25s ease;
  &:hover:enabled {
    cursor: pointer;
    color: #fff;
    background-color: red;
  }
  &:active:enabled {
    background-color: grey;
  }
  &:disabled {
    color: lightgrey;
    box-shadow: 0 0 0 1px lightgrey inset;
  }
`;
