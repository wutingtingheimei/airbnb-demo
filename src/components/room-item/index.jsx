import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import IconStar from "@/assets/svg/icon_star";

import Rating from "@mui/material/Rating";
import IconWish from "@/assets/svg/icon_wish";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props;
  return (
    <RoomWrapper itemwidth={itemWidth}>
      <div className="relative">
        <div className="cover" >
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="absolute tag">{itemData.bottom_info?.content}</div>
        <div className="wish-icon">
        <IconWish></IconWish>
        </div>
        
      </div>
      <div className="info">
        <div className="message">{itemData.verify_info.messages.join("·")}</div>
        <div className="star">
          <IconStar></IconStar>
          <span className="count">{itemData.reviews_count}</span>
        </div>
      </div>
      <div className="name">{itemData.name}</div>
      <div>
        <span className="price">￥1283</span>
        <span>/晚</span>
      </div>
      <Rating
        name="simple-controlled"
        readOnly
        precision={0.1}
        size="small"
        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-2px" }}
        value={itemData.star_rating ?? 5}
      />
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  roomItem: PropTypes.object,
};

export default RoomItem;
