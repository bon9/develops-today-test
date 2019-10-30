import React from "react";
import { HeaderWrap, HeaderTitle, NavButton } from "./Header.styles";

const Header = ({ handleClickBack }) => {
  return (
    <>
      <HeaderWrap>
        <NavButton onClick={handleClickBack}>&#10150;</NavButton>
        <HeaderTitle>Develops Today</HeaderTitle>
      </HeaderWrap>
    </>
  );
};

export default Header;
