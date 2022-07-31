import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../client";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../redux/features/userSlice";
import {
  Button,
  Container,
  Input,
  Link,
  Links,
  More,
  Title,
  Wrapper,
} from "./styles";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/api/auth/signin`,
        {
          email,
          password,
        },
        config
      );

      dispatch(loginSuccess(data));
      navigate("/");
      // alert("Login successfull");
    } catch (error) {
      dispatch(
        loginFailed(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setEMail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="email"
          onChange={(e) => setEMail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
