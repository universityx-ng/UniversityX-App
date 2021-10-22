import React from "react";
import { Container, Box } from "@chakra-ui/react";
import style from "./style.module.css";
import NavBar from "../navbar";
import Hero from "../hero";
import Partners from "../partners";
import Whatx from "../whatX";
import Who from "../who";
import Features from "../features";
import Contact from '../contact'

function Home() {
  return (
    <div>
      <div style={{ padding: "2rem 5rem", background: "#FFB4EB" }}>
        <NavBar />
        <Hero />
      </div>
        <Partners />
        <Whatx />
        <Who />
        <Features />
        <Contact />
    </div>
  );
}

export default Home;
