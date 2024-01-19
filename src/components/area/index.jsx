import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { AreaWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/ScrollView";

const AreaTab = memo((props) => {
  const { list = [], tabClick } = props;
  const areaTabs = [{ name: "全球", icon: true }, ...list];
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleClickArea = (name, index) => {
    setCurrentIndex(index);
    tabClick(name, index);
  };
  return (
    <AreaWrapper>
      <ScrollView>
        {areaTabs?.map((item, index) => {
          return (
            <div
              key={item.name}
              className={classNames("area", {
                active: currentIndex === index,
              })}
              onClick={(e) => handleClickArea(item.name, index)}
            >
              {item.icon && (
                <img
                  src={require("@/assets/img/nav/global.png")}
                  alt=""
                  className="global-icon"
                />
              )}
              {item.name}
            </div>
          );
        })}
      </ScrollView>
    </AreaWrapper>
  );
});

AreaTab.propTypes = {
  list: PropTypes.array,
};

export default AreaTab;
