import React, { memo } from "react";
import { LeftWrapper } from "./style";


const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <img src={require('@/assets/img/header-logo.png')} alt="" className="logo"/>
    </LeftWrapper>
  );
});

export default HeaderLeft;
