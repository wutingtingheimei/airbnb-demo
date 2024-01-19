import styled from "styled-components";

export const AreaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  /* 默认滚动 */
  /* overflow-x: auto; */
  .global-icon {
    width: 30px;
    height: auto;
  }
  /* .global {
    padding: 4px 16px;
    border-radius: 20px;
    min-width: 100px;
    height: 48px;
    border: 1px solid #dddddd;
    margin-right: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .global-icon {
      width: 30px;
      height: auto;
    }
    &:hover {
      text-align: center;
      border: 1px solid black;
    }
  } */

  .area {
      display: flex;
      align-items: center;
      /* flex-direction: row; */
      /* 超出不压缩 */
      flex-basis: 135px;
      flex-shrink: 0;
      
      align-items: center;
      padding: 4px 16px;
      border-radius: 20px;
      /* min-width: 135px; */
      height: 48px;
      border: 1px solid #dddddd;
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-align: center;
        border: 1px solid black;
      }
      &.active {
        text-align: center;
        border: 1px solid black;
      }
    }
`;
