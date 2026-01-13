import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <Flex gap="25px" align="center" height="full" justify="end" mr="55px">
      <Link
        as={NavLink}
        to="/homepage"
        color="blue.50"
        fontSize="lg"
        _activeLink={{
          bgColor: "blue.100",
          color: "blue.700",
          fontWeight: "bold",
          borderRadius: "sm",
          px: "7px",
        }}
      >
        About
      </Link>
      <Link
        as={NavLink}
        to="/mywork"
        color="blue.50"
        fontSize="lg"
        _activeLink={{
          bgColor: "blue.100",
          color: "blue.700",
          fontWeight: "bold",
          borderRadius: "sm",
          px: "7px",
        }}
      >
        My work
      </Link>
    </Flex>
  );
}

export default NavBar;
