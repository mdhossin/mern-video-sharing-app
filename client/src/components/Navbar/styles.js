import styled from "styled-components";

export const Container = styled.nav`
  height: 56px;
  position: fixed;
  background-color: ${({ theme }) => theme.bgLighter};
  top: 0;
  width: 100%;
  padding: 0 26px;

  z-index: 10;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .top {
    display: flex;
    align-items: center;
    gap: 16px;

    h1 {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      font-size: 1.4rem;
      font-style: italic;
      cursor: pointer;
    }
    .toggle {
      display: flex;
      align-items: center;
    }
    svg {
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      font-size: 28px;
    }
  }

  .inputContainer {
    display: flex;
    align-items: center;
    input {
      height: 40px;
      width: 500px;
      align-items: center;
      background-color: ${({ theme }) => theme.inputBg};
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      border-right: none;
      border-radius: 2px 0 0 2px;
      box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0);
      color: ${({ theme }) => theme.inputColor};
      padding: 2px 6px;
      margin-left: 34px;
      outline: none;
      transition: 0.4s;
      &:focus {
        border: 1px solid blue;
        opacity: 0.7;
      }

      @media (max-width: 1024px) {
        width: 250px;
      }
    }

    button {
      border: 1px solid ${({ theme }) => theme.searchBgBorder};
      background-color: ${({ theme }) => theme.searchBgBtn};
      border-radius: 0 2px 2px 0;
      cursor: pointer;
      height: 40px;
      width: 64px;
      margin: 0;

      svg {
        color: ${({ theme }) => theme.text};
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .login {
    display: flex;
    align-items: center;
    gap: 24px;
    @media (max-width: 767px) {
      gap: 16px;
    }

    @media (max-width: 1024px) {
      gap: 20px;
    }

    svg {
      font-size: 28px;
      color: ${({ theme }) => theme.text};
    }
    .camera {
      cursor: pointer;
    }
    .notification {
      cursor: pointer;
    }
    button {
      background: transparent;
      color: blue;
      border: 1px solid blue;
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      border-radius: 0.2rem;
      transition: 0.4s;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        font-size: 20px;
        color: blue;
      }
      &:hover {
        border: 1px solid blue;
        opacity: 0.7;
      }
    }
  }
`;
