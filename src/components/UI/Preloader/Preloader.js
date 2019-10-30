import React from "react";

import PreloaderSvg from "../../../assets/images/preloaderCube.svg";
import { Wrapper, Image } from "./Preloader.styles";

const Preloader = () => {
  return (
    <Wrapper>
      <Image src={PreloaderSvg} alt="preloader" />
    </Wrapper>
  );
};

export default Preloader;
