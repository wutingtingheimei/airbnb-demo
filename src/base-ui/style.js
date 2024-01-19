import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  .control {
    position: absolute;
    z-index: 10;
    top: 50%;
    font-size: 30px;
    transform: translate(0, -50%);
  }
  .right-icon {
    right: 0;
  }

  .left-icon {
    left: 0;
  }
  .content-box {
    width: 100%;
    overflow: hidden;
    padding: 0 10px;
    .scroll-content {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      transition: transform 200ms ease;
    }
  }
`;
