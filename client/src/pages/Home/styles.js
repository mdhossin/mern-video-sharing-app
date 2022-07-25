import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.bg};

  @media (min-width: 768px) {
    margin-left: 80px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px 18px 100px 24px;
`;
