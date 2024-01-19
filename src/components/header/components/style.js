import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color: #fff;
  .logo {
    width: auto;
    height: 32px;
    object-fit: cover;
  }
`;
export const CenterWrapper = styled.div`
  min-width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  /* transition: box-shadow 0.2s ease; */
  color: #222;
  ${props=> props.theme.mixin.boxShadow}
  /* &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  } */
  .search-icon {
    padding: 10px;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 50%;
    /* background-color: var(--light-color); */
    /* 利用style-component设置主题色 */
    background-color: ${(props) => props.theme.color.lightColor};
    color: #fff;
    cursor: pointer;
  }
  .opacity-50{
    opacity: 0.5;
  }

  .date-btn{
    opacity: 0.5;
    
  }
  .p-12{
    padding: 0 12px;
  }
  .p-20{
    padding: 0 20px;
  }
  .weight-bold{
    font-weight: bold;
  }
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  .btn {
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 22px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .btn-wrap {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .panel{
    position: absolute;
    top: 100px;
    right: 24px;
    width: 240px;
    padding: 10px 0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);;
    background: #FFF;
    border-radius: 16px;
    .item{
      padding: 10px 0;
      padding-left: 15px;
      &:hover{
        background: rgba(0,0,0,0.03);
      }
    }
    .item-border{
      border-bottom: 1px solid rgba(0,0,0,0.18);
      margin-bottom: 10px;
    }
  }
`;
