import ScrollView from "@/base-ui/ScrollView";
import RoomItem from "@/components/room-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper} from './style'
import SectionFooter from "@/components/section-footer";
const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>

      <div className="room-list">
       
      </div>

      <ScrollView>
          {infoData.list.map((item) => {
            return (
              <RoomItem
                key={item.id}
                itemData={item}
                itemWidth="20%"
              ></RoomItem>
            );
          })}
        </ScrollView>

        <SectionFooter name="plus"></SectionFooter>
    </SectionWrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
