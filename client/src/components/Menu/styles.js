import styled from "styled-components";

export const WrapperBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 56px;
  z-index: 1;

  transition: opacity 0.3s;

  display: ${({ navbarState }) => (navbarState ? "block" : "none")};

  opacity: ${({ navbarState }) => (navbarState ? "1" : "0")};
`;

export const Container = styled.div`
  @media screen and (min-width: 280px) {
    position: initial;
    width: 100%;
    height: max-content;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .toggle {
        display: block;

        svg {
          font-size: 1.4rem;
          transition: 0.5s;
          color: ${({ theme }) => theme.text};
          cursor: pointer;
        }
      }
    }
  }

  .responsive {
    position: fixed;

    left: -100%;
    top: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.bgLighter};

    height: 100vh;
    width: 240px;
    transition: all 0.3s;
    display: flex;
    opacity: 0;
    visibility: hidden;

    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      background: #888;
      width: 0.3rem;
      border-radius: 0.5rem;
      display: none;
      transition: 0.4s;
    }

    .responsive__links {
      display: flex;
      flex-direction: column;
      width: 100%;
      .sidebar-close {
        display: flex;
        align-items: center;

        padding: 20px 24px;
        .wrapper {
          display: flex;
          align-items: flex-start;
        }

        svg {
          color: ${({ theme }) => theme.text};
          cursor: pointer;
          margin-right: 24px;
        }

        .logo {
          color: ${({ theme }) => theme.text};
          font-size: 1.1rem;
          font-weight: 600;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        border-bottom: 1px solid ${({ theme }) => theme.soft};
        padding-bottom: 15px;

        .active {
          background-color: ${({ theme }) => theme.hoverBg};
          a {
            color: ${({ theme }) => theme.text};
          }
          svg {
            color: ${({ theme }) => theme.text};
          }
        }

        li {
          padding: 0.5rem 1.5rem;
          width: 100%;

          transition: all 0.3s ease;

          &:hover {
            transform: scaleX(1.02);
            background-color: ${({ theme }) => theme.hoverBg};
            a {
              color: ${({ theme }) => theme.text};
            }
            svg {
              color: ${({ theme }) => theme.text};
            }
          }
          svg {
            transition: all 0.3s ease;

            color: ${({ theme }) => theme.text};
          }

          a {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            color: ${({ theme }) => theme.text};
            font-weight: 600;
            font-size: 0.95rem;
            line-height: 1.25rem;
            transition: all 0.3s ease;

            svg {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  .show {
    opacity: 1;
    visibility: visible;
    left: 0%;
  }
`;
