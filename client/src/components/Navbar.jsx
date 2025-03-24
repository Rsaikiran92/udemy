import { Box, Button, Input, InputGroup } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiGlobe } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import "../styles/Navbar.css";
import {
  Avatar,
  HStack,
  HoverCard,
  Icon,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CloseButton, Drawer } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { Menu } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"

function Navbar() {
  return (
    <>
      <Box className="navbar">
        <Drawer.Root placement={"start"}>
          <Drawer.Trigger asChild>
            <Button variant="ghost" className="menu">
              <IoMdMenu />
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
        <Box>
          <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" />
        </Box>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="ghost" className="btn">
              Explore
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt">Browse Certifications</Menu.Item>
                <Menu.Item value="new-file">New File...</Menu.Item>
                <Menu.Root
                  positioning={{ placement: "right-start", gutter: 2 }}
                >
                  <Menu.TriggerItem>
                    Open Recent <LuChevronRight />
                  </Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.Item value="panda">Panda</Menu.Item>
                        <Menu.Item value="ark">Ark UI</Menu.Item>
                        <Menu.Item value="chakra">Chakra v3</Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
                <Menu.Item value="open-file">Open File...</Menu.Item>
                <Menu.Item value="export">Export</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        <InputGroup startElement={<IoIosSearch />} className="btn">
          <Input placeholder="Search for anythink" borderRadius={"50px"} />
        </InputGroup>
        <Button variant="ghost" className="ghostbtn btn">
          Planing & Pricing
        </Button>

        <HoverCard.Root size="xs">
          <HoverCard.Trigger asChild>
            <Button variant="ghost" className="ghostbtn btn">
              Udemy Businesst
            </Button>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner
              marginTop="5px"
              marginRight={"100px"}
              openDelay={"1000"}
              marginLeft={"-80px"}
            >
              <HoverCard.Content>
                <Stack gap="4" direction="row">
                  <Stack gap="3">
                    <Stack gap="1">
                      <Text
                        textStyle="xl"
                        fontWeight="semibold"
                        textAlign={"center"}
                      >
                        Get your team access to over 27,000 top Udemy courses,
                        anytime, anywhere.
                      </Text>
                    </Stack>
                    <Button className="solidbtn" colorPalette={"purple"}>
                      Try Udemy Businesst
                    </Button>
                  </Stack>
                </Stack>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>

        <HoverCard.Root size="xs">
          <HoverCard.Trigger asChild>
            <Button variant="ghost" className="ghostbtn btn">
              Teach on Udemy
            </Button>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner
              marginTop="5px"
              marginRight={"100px"}
              openDelay={"0"}
              lazyMount={false}
              marginLeft={"-80px"}
            >
              <HoverCard.Content>
                <Stack gap="4" direction="row">
                  <Stack gap="3">
                    <Stack gap="1">
                      <Text
                        textStyle="xl"
                        fontWeight="semibold"
                        textAlign={"center"}
                      >
                        Turn what you know into an opportunity and reach
                        millions around the world.
                      </Text>
                    </Stack>
                    <Button className="solidbtn" colorPalette={"purple"}>
                      Learn more
                    </Button>
                  </Stack>
                </Stack>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>

        <Button variant="ghost" className="ghostbtn">
          <MdOutlineShoppingCart />
        </Button>
        <Button variant="outline" colorPalette="purple" className="btn">
          Log in
        </Button>
        <Button
          color={"white"}
          className="solidbtn btn"
          colorPalette={"purple"}
        >
          Sign up
        </Button>
        <Button variant="outline" className="btn">
          <PiGlobe />
        </Button>
      </Box>
    </>
  );
}

export default Navbar;
