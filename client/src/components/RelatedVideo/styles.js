import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 100px;
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const Content = styled.div``;
export const Title = styled.h1`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
export const DescWrapper = styled.div``;
export const Name = styled.h2`
  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.grayText};
`;
export const ViewsWrapper = styled.div`
  margin-top: 0.1rem;
`;
export const Views = styled.span`
  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.grayText};
`;
export const Days = styled(Views)``;
