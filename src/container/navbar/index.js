import React from "react";
import { Flex,Spacer, Center, Text, Square, Box, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function NavBar() {
  const navlinks = ["About", "Features", "Contact us",];
  return (
    <Box>
      <Flex>
          <img src={logo} alt={logo.slice(logo.length-10)} />
          <Spacer/>
      <Flex color="gray">
          {navlinks?.map((link, index)=>
            <Box p={4}>
                <Link key={link}>{link}</Link>
            </Box>
          )}
           <Box p={4}>
                <Link>Log in</Link>
            </Box>
            <Box p={4}>
                <Link style={{borderRadius: "2rem", background: "black", color: "#ffff", padding:"0.5rem 0.7rem"}}>Sign up</Link>
            </Box>
      </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
