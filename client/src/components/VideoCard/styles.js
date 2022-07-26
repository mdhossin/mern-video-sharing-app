import styled from "styled-components";

export const Container = styled.div`
  height: 330px;
  background-color: ${({ theme }) => theme.bg};
  cursor: pointer;
  border-radius: 5px;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
  height: 210px;
`;

export const ContentWraper = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-start;

  gap: 24px;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50%;
`;
export const TitleContainer = styled.div``;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ViewsContent = styled.div`
  margin-top: 8px;
`;

export const Name = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.grayText};
`;

export const ViewsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 3px;
`;
export const Views = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.grayText};
`;
export const Days = styled(Views)``;
