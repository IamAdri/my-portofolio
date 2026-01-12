import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <Grid
      templateAreas={`"nav"
                  "main"
                  `}
      gridTemplateRows={"70px 1fr"}
      height="100vh"
    >
      <GridItem pl="2" bg="blue.700" area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2" area={"main"} bg="#FAF7F2">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default AppLayout;
