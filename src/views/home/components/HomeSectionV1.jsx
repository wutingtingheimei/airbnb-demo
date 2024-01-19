import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import {SectionWrapper} from './style'
import SectionFooter from "@/components/section-footer";
const HomeSectionV1 = memo((props) => {
  const { infoData}  = props
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionRooms classNames="high-score" roomList={infoData.list}></SectionRooms>
      <SectionFooter></SectionFooter>
    </SectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
