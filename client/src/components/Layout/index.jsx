import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SignIn, Video } from "../../pages";

import Navbar from "../Navbar";
import SideMenu from "../SideMenu";

import { Container, Main, Wrapper } from "./styles";

const Layout = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Main>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Wrapper>
          <SideMenu />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Layout;
