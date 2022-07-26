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
  max-width: 1140px;

  margin: 16px 24px 100px 70px;
  display: flex;
  gap: 22px;
`;

export const LeftContent = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div``;
export const ImageContainer = styled.div``;

export const Content = styled.div`
  display: grid;
  row-gap: 30px;
`;

export const RightContent = styled.div`
  flex: 2;
  width: 100%;
  height: fit-content;
`;

export const Heading = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div``;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const Recommendation = styled.div`
  flex: 2;
`;
export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.span`
  font-weight: 500;
`;

export const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
