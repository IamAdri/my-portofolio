import { Flex } from "@chakra-ui/react";
import AdrielleCard from "../ui/AdrielleCard";
import AdminCard from "../ui/AdminCard";

function MyWork() {
  return (
    <Flex
      gap="25px"
      my="100px"
      px="15px"
      w="full"
      justify="center"
      wrap={{ base: "wrap", lg: "nowrap" }}
    >
      <AdrielleCard />
      <AdminCard />
    </Flex>
  );
}

export default MyWork;
