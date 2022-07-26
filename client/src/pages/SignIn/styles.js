import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  margin-left: 80px;
  background: ${({ theme }) => theme.bg};
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 30px 50px;
  gap: 10px;
  margin-right: 80px;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
  width: 300px;
  outline: none;
  transition: 0.5s;

  &:focus {
    border: 1px solid blue;
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 30px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  border: 1px solid transparent;
  transition: 0.5s;

  &:hover {
    border: 1px solid blue;
  }
`;

export const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

export const Links = styled.div`
  margin-left: 50px;
`;

export const Link = styled.span`
  margin-left: 30px;
`;
