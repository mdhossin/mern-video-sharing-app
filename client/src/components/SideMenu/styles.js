import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 100vh;
  background: ${({ theme }) => theme.bgLighter};
  /* padding-top: 10px; */
  position: fixed;
  top: 56px;
  @media (max-width: 767px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      padding: 16px 14px;

      &:hover {
        background-color: ${({ theme }) => theme.hoverBg};

        span {
          color: ${({ theme }) => theme.text};
        }
        svg {
          color: ${({ theme }) => theme.text};
        }
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 5px;
        svg {
          color: ${({ theme }) => theme.text};
        }
        span {
          color: ${({ theme }) => theme.text};
          font-size: 9px;
        }
      }
    }
  }
`;
