import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import AreaTab from "@/components/area";
import SectionRooms from "@/components/section-rooms";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  console.log(infoData)
  const { dest_address, dest_list } = infoData;
  const initialName = Object.keys(infoData.dest_list ?? {})[0];
  const [name, setName] = useState(initialName);
  // const [roomList, setRoomList] = useState(infoData.dest_list?.[name]);
  // 数据转换
  const destAddressNames = dest_address?.map((item) => {
    return {
      name: item.name,
    };
  });
  console.log(destAddressNames, 'destAddressNames')
  const handleTabClick = useCallback(
    function (name, index) {
      if (index === 0) {
        const roomList = [];
        Object.keys(dest_list).forEach((key)=> {

          console.log((dest_list[key]))
          
          roomList.push(...dest_list?.[key]);
          console.log(roomList, 'roomList')
        })
        // setRoomList(roomList);
      } else {
        // setRoomList(dest_list?.[name]);
      }

      setName(name);
    },
    [dest_list]
  );
  return (
    <div>
      <AreaTab list={destAddressNames} tabClick={handleTabClick}></AreaTab>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3%"></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </div>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
