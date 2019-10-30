import styled from "styled-components";

export const PostWrap = styled.div`
  margin: 0.25em 0;
  transition: all 0.5s ease;
  padding: 0.25em;
  box-shadow: 0 0 2px 2px transparent;
  &:hover {
    box-shadow: 0 0 2px 2px lightgrey;
    border-radius: 0.3em;
    cursor: pointer;
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
`;
