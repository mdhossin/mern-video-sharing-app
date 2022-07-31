import React, { useState } from "react";
import Menu from "../Menu";
import { Container, UserProfile, Wrapper } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [navbarState, setNavbarState] = useState(false);
  const user = useSelector((state) => state.user.user);
  console.log(user, "user");
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
            {user ? (
              <>
                <div className="camera">
                  <CreateNewFolderOutlinedIcon />
                </div>

                <UserProfile>
                  <img src={user.img} alt="" />
                  <h5>{user.name}</h5>
                </UserProfile>
              </>
            ) : (
              <Link to="/signin">
                <button>
                  <AccountCircleOutlinedIcon />
                  Sign In
                </button>
              </Link>
            )}
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
