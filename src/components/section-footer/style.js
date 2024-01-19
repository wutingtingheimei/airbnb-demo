import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props=> props.color};
  &:hover {
    text-decoration: underline;
  }
`;
