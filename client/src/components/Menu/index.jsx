import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Container, WrapperBg } from "./styles";

const Menu = ({ setNavbarState, navbarState, setDarkMode, darkMode }) => {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
      <Container>
        <div
          // state={navbarState}
          className={"responsive " + (navbarState && "show")}
        >
          <div className="responsive__links">
            <div className="sidebar-close">
              <div className="wrapper">
                {navbarState && (
                  <CloseIcon
                    className="close"
                    onClick={() => setNavbarState(false)}
                  />
                )}

                <h1 className="logo">Watch Now</h1>
              </div>
            </div>
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to="/" onClick={() => setNavbarState(false)}>
                  <HomeIcon />

                  <span>Home</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/explore" onClick={() => setNavbarState(false)}>
                  <ExploreIcon />

                  <span>Explore</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to="/subscriptions" onClick={() => setNavbarState(false)}>
                  <SubscriptionsOutlinedIcon />

                  <span>Subscriptions</span>
                </Link>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to="/library" onClick={() => setNavbarState(false)}>
                  <VideoLibraryOutlinedIcon />

                  <span>Library</span>
                </Link>
              </li>
            </ul>
            <ul style={{ paddingTop: "15px" }}>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to="/history" onClick={() => setNavbarState(false)}>
                  <HistoryOutlinedIcon />

                  <span>History</span>
                </Link>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <Link to="/music" onClick={() => setNavbarState(false)}>
                  <LibraryMusicOutlinedIcon />

                  <span>Music</span>
                </Link>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <Link to="/sports" onClick={() => setNavbarState(false)}>
                  <SportsBasketballOutlinedIcon />

                  <span>Sports</span>
                </Link>
              </li>
              <li
                className={currentLink === 8 ? "active" : "none"}
                onClick={() => setCurrentLink(8)}
              >
                <Link to="/movies" onClick={() => setNavbarState(false)}>
                  <MovieOutlinedIcon />

                  <span>Movies</span>
                </Link>
              </li>
            </ul>
            <ul style={{ paddingTop: "15px" }}>
              <li
                className={currentLink === 9 ? "active" : "none"}
                onClick={() => setCurrentLink(9)}
              >
                <Link to="/settings" onClick={() => setNavbarState(false)}>
                  <SettingsOutlinedIcon />

                  <span>Settings</span>
                </Link>
              </li>
              <li
                className={currentLink === 10 ? "active" : "none"}
                onClick={() => setCurrentLink(10)}
              >
                <Link to="/report" onClick={() => setNavbarState(false)}>
                  <FlagOutlinedIcon />

                  <span>Report</span>
                </Link>
              </li>
              <li
                className={currentLink === 11 ? "active" : "none"}
                onClick={() => setCurrentLink(11)}
              >
                <Link to="/help" onClick={() => setNavbarState(false)}>
                  <HelpOutlineOutlinedIcon />

                  <span>Help</span>
                </Link>
              </li>
              <li
                className={currentLink === 12 ? "active" : "none"}
                onClick={() => {
                  setCurrentLink(12);
                  setDarkMode((prev) => !prev);
                }}
              >
                <Link to="/">
                  <SettingsBrightnessOutlinedIcon />

                  <span>{darkMode ? "Light" : "Dark"} Mode</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <WrapperBg
        onClick={() => setNavbarState(false)}
        navbarState={navbarState}
      ></WrapperBg>
    </>
  );
};

export default Menu;
