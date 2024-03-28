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
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../context/slices/auth";
import customAxios from "../config/customAxios";

const Links = [
  { name: "Home", link: "/" },
  { name: "Tours", link: "/tours" },
  { name: "Teams", link: "/teams" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const user = useSelector((state) => state.auth);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    try {
      const response = await customAxios.get("/user/logout");

      if (response.data.status === "success") {
        dispatch(logout());
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
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
              <NavLink key={link.link} to={link.link}>
                <Box
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    bg: "teal.300",
                  }}
                  fontWeight={"500"}
                  bgColor={pathname === link.link ? "teal.300" : "teal.200"}
                >
                  {link.name}
                </Box>
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"} gap={"10px"}>
          {user.token ? (
            <Menu>
              <Text fontSize={"md"} fontWeight={500}>
                {user.user.name}
              </Text>

              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={user.user.photo} />
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
                <MenuItem onClick={handleLogout}>
                  <Icon as={TbLogout2} w={6} h={6} mr={"8px"} />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              fontSize={"sm"}
              fontWeight={600}
              colorScheme="teal"
            >
              Login
            </Button>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.link} to={link.link}>
                <Box
                  px={4}
                  py={2}
                  rounded={"md"}
                  _hover={{
                    bg: "teal.300",
                  }}
                  fontWeight={"500"}
                >
                  {link.name}
                </Box>
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
