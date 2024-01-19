import styled from "styled-components";

// react 动态引入本地图片
export const BannerWrapper = styled.div`
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
  background-size: 100% 100%;
  height: 530px;
`;

export const SectionWrapper = styled.div`
  margin-top: 35px;

  .room-list {
    margin: 0 -8px;
  }
`;

export const LongforWrapper = styled.div`
  margin-top: 30px;
  .list-box {
    display: flex;
    align-items: center;
    margin: 0 -10px;
  }
`;
