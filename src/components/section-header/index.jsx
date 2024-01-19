import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {

  const { title, subtitle} = props
  return <HeaderWrapper>
    <div className="title">{title|| ''}</div>
    <div className="subtitle">{subtitle || ''}</div>
  </HeaderWrapper>;
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
