import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

export const HeaderTitle = styled.h2`
  color: white;
  align-self: center;
`;

export const NavButton = styled.button`
  transform: rotate(180deg);
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: #fff;
  font-size: 2em;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 50px;
  margin-left: 20px;
  outline: none;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    font-size: 2.1em;
    color: lightgreen;
  }
`;
