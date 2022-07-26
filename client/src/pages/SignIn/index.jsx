import React from "react";
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
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="email" />
        <Input type="password" placeholder="Password" />
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
