import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaRegUserCircle } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { CgBee } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Links = ["About", "Support", "Teams"];

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      position={"sticky"}
      top={0}
      width="100%"
      maxWidth="1920px"
      mx="auto"
      px={{ base: "20px", md: "40px", xl: "80px" }}
      py={"10px"}
      boxShadow={"md"}
      bgColor={"teal.200"}
      textColor={"gray.700"}
      zIndex={1000}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Flex
            onClick={() => navigate("/")}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Icon as={CgBee} w={10} h={10} mr="10px" />
            <Text as="b" fontSize={"20px"}>
              Bee Travel
            </Text>
          </Flex>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"} gap={"10px"}>
          <Button
            onClick={() => navigate("/login")}
            fontSize={"sm"}
            fontWeight={600}
            colorScheme="teal"
          >
            Login
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Icon as={FaRegUserCircle} w={6} h={6} mr={"8px"} />
                Account
              </MenuItem>
              <MenuItem>
                <Icon as={MdPermContactCalendar} w={6} h={6} mr={"8px"} />
                Contact
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Icon as={TbLogout2} w={6} h={6} mr={"8px"} />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "teal.300",
      }}
      href={"#"}
      fontWeight={"500"}
    >
      {children}
    </Box>
  );
};
