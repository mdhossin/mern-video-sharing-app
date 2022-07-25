import React, { useState } from "react";
import Menu from "../Menu";
import { Container, Wrapper } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <div className="top">
            <MenuIcon
              onClick={(e) => {
                setNavbarState(true);
              }}
            />

            <h1>Watch</h1>
          </div>

          <div className="inputContainer">
            <input type="text" placeholder="Search" />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="login">
            <div className="camera">
              <CreateNewFolderOutlinedIcon />
            </div>
            <div className="notification">
              <NotificationsNoneOutlinedIcon />
            </div>

            <button>
              <AccountCircleOutlinedIcon />
              Sign In
            </button>
          </div>
        </Wrapper>
      </Container>
      <Menu
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        navbarState={navbarState}
        setNavbarState={setNavbarState}
      />
    </>
  );
};

export default Navbar;
