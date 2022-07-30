import React, { useState } from "react";
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

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
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
