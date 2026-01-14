import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function AdminCard() {
  return (
    <Card maxW="750px">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="lg">Admin-Panel</Heading>
          <Image
            src="/admin.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Heading size="md">Description</Heading>
          <Text>
            <Text as="b" color="blue.700">
              Admin panel website
            </Text>{" "}
            used to fetch and mutate data for Adrielle e-commerce website.
          </Text>
          <Text>
            This project is a{" "}
            <Text as="b" color="blue.700">
              demo for my portofolio
            </Text>{" "}
            and it can do the following main tasks:
          </Text>
          <UnorderedList>
            <ListItem>
              <Text as="b" color="blue.700">
                CRUD
              </Text>{" "}
              actions of an admin website: fetch products and orders, edit and
              delete existing products, add new product.
            </ListItem>
            <ListItem>
              {" "}
              <Text as="b" color="blue.700">
                Filter
              </Text>{" "}
              and{" "}
              <Text as="b" color="blue.700">
                sort
              </Text>{" "}
              products based on available options.
            </ListItem>
            <ListItem>
              Show{" "}
              <Text as="b" color="blue.700">
                charts
              </Text>{" "}
              regarding revenue of last 6 months and general customer`s ratings.
            </ListItem>
            <ListItem>
              Authenticate administrator with{" "}
              <Text as="b" color="blue.700">
                Supabase authenticator
              </Text>{" "}
              .
            </ListItem>
            <ListItem>
              <Text as="b" color="blue.700">
                Log out
              </Text>{" "}
              user automatically at the end of session.
            </ListItem>
            <ListItem>
              Change admin details and{" "}
              <Text as="b" color="blue.700">
                password
              </Text>
              .
            </ListItem>
          </UnorderedList>
          <Heading size="md">Notes</Heading>
          <Text>
            In order to explore the website you need to use the following{" "}
            <Text as="b" color="blue.700">
              credentials
            </Text>
            :
          </Text>
          <UnorderedList>
            <ListItem>
              email (fake adress safe to use) -{" "}
              <Text as="b" color="blue.700">
                admin@gmail.com
              </Text>
            </ListItem>
            <ListItem>
              password -{" "}
              <Text as="b" color="blue.700">
                AdminPanel1!
              </Text>
            </ListItem>
          </UnorderedList>
          <Text>
            If you want to test{" "}
            <Text as="b" color="blue.700">
              adding new product
            </Text>{" "}
            functionality, feel free to use images as demo from public/test
            folder of{" "}
            <Text as="b" color="blue.700">
              github repository
            </Text>{" "}
            (see the link below).
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <a
            href="https://admin-panel-lemon-two.vercel.app/login"
            target="_blank"
          >
            <Button variant="solid" colorScheme="orange">
              Explore the website
            </Button>
          </a>

          <a href="https://github.com/IamAdri/admin-panel" target="_blank">
            <Button variant="outline" colorScheme="orange">
              Explore github repository
            </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default AdminCard;
