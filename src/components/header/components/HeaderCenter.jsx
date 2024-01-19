import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="p-20 weight-bold">全球</div>
      <div className="date-btn p-20">入住退房日期</div>
      <div className="p-20 opacity-50">关键词</div>
      <div className="search-icon">
        <IconLogo></IconLogo>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
