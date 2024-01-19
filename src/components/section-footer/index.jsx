import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const SectionFooter = memo((props) => {
  const {name} = props
  let showMessage = '查看更多'
  if(name){
    showMessage = `查看更多${name}房源`
  }
  const navigate = useNavigate()
  function moreClick () {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={name ? '#00848A': '#000'} onClick={e =>moreClick() }>
      <div>{showMessage}</div>
      <RightOutlined />
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;
