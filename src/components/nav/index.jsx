import React, { memo, useState } from "react";
import { NavWrapper } from "./style";
// import { Carousel } from "antd";

const NavList = memo(() => {
  const [navList] = useState([
    {
      id: 1,
      icon: require("@/assets/img/nav/1.png"),
      title: "OMG 妙啊",
    },
    {
      id: 2,
      icon: require("@/assets/img/nav/2.png"),
      title: "城堡",
    },
    {
      id: 3,
      icon: require("@/assets/img/nav/3.png"),
      title: "树屋",
    },
    {
      id: 4,
      icon: require("@/assets/img/nav/4.png"),
      title: "北极风光",
    },
    {
      id: 5,
      icon: require("@/assets/img/nav/5.png"),
      title: "大师设计",
    },
    {
      id: 6,
      icon: require("@/assets/img/nav/6.png"),
      title: "风车小屋",
    },
    {
      id: 7,
      icon: require("@/assets/img/nav/7.png"),
      title: "韩屋",
    },
    {
      id: 8,
      icon: require("@/assets/img/nav/8.png"),
      title: "船屋",
    },
    {
      id: 9,
      icon: require("@/assets/img/nav/9.png"),
      title: "生态土屋",
    },
    {
      id: 10,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 11,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 12,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },

    {
      id: 13,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 14,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 15,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 16,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
    {
      id: 17,
      icon: require("@/assets/img/nav/10.png"),
      title: "摩洛哥传统庭院",
    },
  ]);

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  return (
    <NavWrapper>
      {/* <Carousel afterChange={onChange} className="item-wrap"> */}
      <div className="item-wrap">
      {navList.map((item) => {
        return (
          <div key={item.id} className="item">
            <img src={item.icon} alt="" className="nav-icon" />
            <div>{item.title}</div>
          </div>
        );
      })}
      {/* </Carousel> */}
      </div>
    </NavWrapper>
  );
});

export default NavList;
