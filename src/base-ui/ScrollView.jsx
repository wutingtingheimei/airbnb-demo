// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { ScrollViewWrapper } from "./style";
const ScrollView = memo((props) => {
  const [posIndex, setPosIndex] = useState(0);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const [showLeftBtn, setShowLeftBtn] = useState(false);
  // 对于这种只需要记录的值，无需每次都刷新， 可以使用useRef
  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();
  useEffect(() => {
    // 一共可以滚动的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth;
    // 本身占据的宽度
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRightBtn(totalDistance > 0);
  }, [props.children]);

  function handleRightClick() {
    console.log("22222222222222");
    scrollPosition(posIndex + 1);
  }

  function handelLeftClick() {
    console.log("111");
    console.log(1111111111111111);
    scrollPosition(posIndex - 1);
  }

  const scrollPosition = (index) => {
    const newOffsetLeft = scrollContentRef.current.children[index].offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(index);
    // 是否显示右边按钮  // 一共可以滚动的宽度大于newOffsetLeft
    setShowRightBtn(totalDistanceRef.current > newOffsetLeft);

    // 是否显示左边按钮
    setShowLeftBtn(newOffsetLeft > 0);
  };
  return (
    <ScrollViewWrapper>
      {showLeftBtn && (
        <LeftCircleOutlined
          className="control left-icon"
          onClick={(e) => handelLeftClick()}
        />
      )}
      <div className="content-box">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>

      {showRightBtn && (
        <RightCircleOutlined
          className="control right-icon"
          onClick={(e) => handleRightClick()}
        />
      )}
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
