import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Spacer,
  VStack,
  Text,
  Square,
  Box,
  Badge,
} from "@chakra-ui/react";
import styles from "./style.module.css";
import hbimage from "../../assets/img/pexels-kampus-production-5940856-removebg-preview 1.png";
import bookplus from "../../assets/img/11.png";
import apple from "../../assets/img/9.png";
import book from "../../assets/img/12.png";
import video from "../../assets/img/10.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.vs1}>
        <Box>
          <Text className={styles.ctah1}>Learn anywhere, and everywhere</Text>
          <Text className={styles.ctah2}>
            Take your regular university courses online now. Enjoy our power
            packed app features
          </Text>
        </Box>

        <div className={styles.ctab}>
          <Link
            style={{
              borderRadius: "2rem",
              background: "black",
              color: "#ffff",
              padding: "0.5rem 0.7rem",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Create a free account
          </Link>
        </div>
      </div>
      <Spacer />
      <div className={styles.rs}>
        <img
          src={hbimage}
          alt=""
          style={{ maxWidth: "80%", position: "relative", top: "-7rem" }}
        />
        <div className={styles.mixcontent}>
          <div className={styles.bkplus}>
            <img src={bookplus} alt="" />
          </div>
          <div className={styles.aple}>
            <img src={apple} alt="" />
            <Text>Get all your school learning resources now</Text>
          </div>
          <div className={styles.bk}>
            <img src={book} alt="" />
            <Text>Access over 1000 free study materials</Text>
          </div>
          <div className={styles.vd}>
            <img src={video} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
