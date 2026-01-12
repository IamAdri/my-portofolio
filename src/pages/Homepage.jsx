import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import {
  GitHubDark,
  JavaScript,
  NextJs,
  React,
  Supabase,
  TailwindCSS,
  VercelDark,
  VercelDarkWordmark,
} from "developer-icons";

function Homepage() {
  const navigate = useNavigate();
  const handleGoToMyWork = (e) => {
    e.preventDefault();
    navigate("/mywork");
  };
  return (
    <Flex my="155px" w="full" justify="center">
      <Flex direction="column" w="850px" align="center" gap="55px">
        <Flex gap="35px">
          <Flex direction="column" gap="15px">
            <Heading>Hi 👋 I`m Adriana</Heading>
            <Text fontSize="xl">
              <Text as="b" color="blue.700">
                Junior Front-End Developer
              </Text>{" "}
              passionate about passionate about turning ideas into responsive
              and clean websites!
            </Text>
            <Flex gap="15px" my="25px">
              <JavaScript size={35} />
              <React size={35} />
              <NextJs size={35} />
              <Supabase size={35} />
              <TailwindCSS size={35} />
              <GitHubDark size={35} />
              <VercelDark size={35} />
            </Flex>

            <Flex gap="15px">
              <Heading size="md">Find me on:</Heading>
              <Link href="https://github.com/IamAdri" isExternal>
                <Flex align="center">
                  <Text color="blue.700" fontWeight="semibold" fontSize="lg">
                    Github profile
                  </Text>
                  <ExternalLinkIcon color="blue.700" mx="2px" />
                </Flex>
              </Link>
            </Flex>
          </Flex>
          <Image
            src="profilePicture.jpg"
            alt="Profile picture"
            boxSize="300px"
            borderRadius="3xl"
          />
        </Flex>

        <Button
          variant="solid"
          size="lg"
          colorScheme="orange"
          onClick={handleGoToMyWork}
        >
          View my work
        </Button>
      </Flex>
    </Flex>
  );
}

export default Homepage;
