import {
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchIcon, HamburgerIcon, ExternalLinkIcon, EditIcon} from "@chakra-ui/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiMap, BiUnderline } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { BsHeart } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
        <div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list1">
            <li className="items1">
              <Text fontWeight="bold" color="black">
                <Link to="/products/shirts">Crate&Barrel</Link>
              </Text>
            </li>
            <li className="items1">
              <Text fontWeight="light" color="black">
                <Link to="/products/polos">Crate&Kids</Link>
              </Text>
            </li>
            <li className="items1">
              <Text fontWeight="light" color="black">
                CB2
              </Text>
            </li>
            <li className="items1">
              <Text fontWeight="light" color="black">
                HUSDON|GRACE
              </Text>
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <HamburgerIcon />
        </button>
        <hr></hr>
      </div>
      <Flex justify="space-between" align="center" px="60px">
        <Flex align="center" gap="20px">
          <InputGroup
            bg="white"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
            width="20rem"
            size="sm"

          >
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input
              type="text"
              borderRadius="5px"
              placeholder="What are you looking for ?"
            />
          </InputGroup>
          <Flex
  py="20px"
  px="10px"
  flexDirection="column"
  align="center"
  justifyContent="flex-start" // Align children elements (text) to the left
  alignItems="center"
  mx={{ base: "0px", sm: "5rem", md: "14rem", lg: "5rem" }}
>
  <Heading
    fontSize="2.8rem"
    lineHeight="1.8rem"
    fontWeight={"bold"}
    color="black"
    letterSpacing="1px"
    paddingBottom={3}
  >
    Crate&Barrel
  </Heading>
  <Text fontSize="0.8rem" letterSpacing="3px">
    by codedawgs
  </Text>
</Flex>
<Link to="/order">
            <Text fontWeight="light" color="black" fontSize="sm" ml="">
              ORDER
            </Text>
          </Link>
          <RiAccountCircleFill size={25} color="black.500" ml="20px" />
          <BiMap size={25} color="gray.500" ml="20px" />
          <BsHeart size={25} color="gray.500" ml="20px" />
          <AiOutlineShoppingCart size={25} color="gray.500" ml="20px" />

        </Flex>
      </Flex>
      <div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/shirts">Furniture</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                <Link to="/products/polos">Outdoor</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                Tabletop & Bar
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                Kitchen
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                Bedding
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
              Bath
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                Decor & Pillows
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="white">
                Lighting
              </Text>
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <HamburgerIcon />
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
