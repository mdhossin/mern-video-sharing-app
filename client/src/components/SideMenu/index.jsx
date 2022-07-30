import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

const SideMenu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <HomeIcon />

            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/trend">
            <ExploreIcon />

            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/subscriptions">
            <SubscriptionsOutlinedIcon />

            <span>Subscriptions</span>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <VideoLibraryOutlinedIcon />

            <span>Library</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideMenu;
