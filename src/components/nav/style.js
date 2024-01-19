import styled from "styled-components";

export const NavWrapper = styled.div`
  .item-wrap {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 77px;
      .nav-icon {
        text-align: center;
        width: 24px;
        height: auto;
      }
    }
  }
`;
