import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/ScrollView";
const Longfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>

      <div className="list-box">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem key={item.id} itemData={item}></LongforItem>;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

Longfor.propTypes = {
  infoData: PropTypes.object,
};

export default Longfor;
