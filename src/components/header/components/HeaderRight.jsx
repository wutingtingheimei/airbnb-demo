import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconLanguage from "@/assets/svg/icon_language";
import IconMenu from "@/assets/svg/icon_menu";
import IconLogin from "@/assets/svg/icon_login";
import { Button } from "antd";
const HeaderRight = memo(() => {
  // 定义状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用处理函数
  useEffect(() => {
    const windowHandleClick = ()=> {
      setShowPanel(false);
    }
    window.addEventListener('click', windowHandleClick, 
    //设置捕获
    true);
    // 取消监听
    return ()=> {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, []);
  // 事件处理函数
  const panelHandleClick = () => {
    setShowPanel(true);
  };
  return (
    <RightWrapper>
      <div className="btn">
        <IconLanguage></IconLanguage>
      </div>

      <Button
        type="default"
        className="btn-wrap"
        shape="round"
        onClick={(e) => panelHandleClick()}
      >
        <IconMenu></IconMenu>
        <IconLogin></IconLogin>
      </Button>
      {showPanel && (
        <div className="panel">
          <div className="item">注册</div>
          <div className="item item-border">登录</div>
          <div className="item">帮助中心</div>
        </div>
      )}
    </RightWrapper>
  );
});

export default HeaderRight;
