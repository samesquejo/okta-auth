import { Button, Stack, Container } from "@chakra-ui/react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth } = useOktaAuth();

  const login = async () =>
    oktaAuth.signInWithRedirect({ originalUri: "/home" });

  // login();

  return (
    <Container>
      <Stack w="100%" justifyContent="center" alignItems="center">
        <Button onClick={login}>Sign in with Okta</Button>
      </Stack>
    </Container>
  );
};
export default Login;
