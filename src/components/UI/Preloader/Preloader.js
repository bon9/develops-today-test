import React from "react";

import PreloaderSvg from "../../../assets/images/preloaderCube.svg";
import { Wrapper, Image } from "./style";

const Preloader = () => {
  return (
    <Wrapper>
      <Image src={PreloaderSvg} alt="preloader" />
    </Wrapper>
  );
};

export default Preloader;
