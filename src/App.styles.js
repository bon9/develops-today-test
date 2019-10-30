import styled from "styled-components";

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  border: 1px solid #000;
  margin: 1em auto;
`;

export const HeaderWrap = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

export const HeaderTitle = styled.h2`
  color: white;
`;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 1.5em;
`;
