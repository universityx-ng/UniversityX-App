import React from 'react'
import { Container, Box, Flex, Spacer } from "@chakra-ui/react"
import style from './style.module.css';

function Home() {
    return (
      <Container>
        <Box className={style.welcome_msg}> Welcome to UniversityX </Box>
      </Container>
    );
  }
  
  export default Home;
