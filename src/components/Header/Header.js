import React from "react";
import PropTypes from "prop-types";

import { HeaderWrap, HeaderTitle, NavButton } from "./Header.styles";

Header.propTypes = {
  handleClickBack: PropTypes.func.isRequired
};

function Header({ handleClickBack }) {
  return (
    <HeaderWrap>
      <NavButton onClick={handleClickBack}>&#10150;</NavButton>
      <HeaderTitle>Develops Today</HeaderTitle>
    </HeaderWrap>
  );
}

export default Header;
