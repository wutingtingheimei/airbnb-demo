import styled from "styled-components";

export const RoomWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemwidth};
  padding: 8px;
  box-sizing: border-box;
  /* .cover {
    border-radius: 12px;
    height: 250px;
    object-fit: cover;
  } */
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 5px;
    .message {
      background: #ebebeb;
      padding: 0 4px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
    }
    .star {
      display: flex;
      /* align-items: center; */
      align-items: baseline;
      .count{
        margin-left: 3px;
      }
    }
  }
  .tag {
    padding: 0 6px;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    top: 10px;
    left: 10px;
  }
  .wish-icon{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .name {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 6px;
  }
`;
