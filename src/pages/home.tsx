import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Box w="full" p="12">
      <VStack alignItems="start">
        <Text>Email: {userInfo?.email}</Text>
        <Text>sub: {userInfo?.sub}</Text>
        <Text>
          Name (Given / Family): {userInfo?.given_name} {userInfo?.family_name}
        </Text>
        <Text>Name: {userInfo?.name}</Text>
      </VStack>
    </Box>
  );
};

export default Home;
