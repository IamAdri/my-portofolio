import { Flex } from "@chakra-ui/react";
import AdrielleCard from "../ui/AdrielleCard";
import AdminCard from "../ui/AdminCard";

function MyWork() {
  return (
    <Flex gap="25px" my="155px" w="full" justify="center">
      <AdrielleCard />
      <AdminCard />
    </Flex>
  );
}

export default MyWork;
