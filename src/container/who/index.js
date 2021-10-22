import React from "react";
import { Container } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import styles from "./style.module.css";

function Who() {
  return (
    <div>
      <p className={styles.ctx}>Who is UniversityX for?</p>
      <Container>
        University-X is an E-learning platform that allows tertiary students
        take online classes from their universities anchored by their lecturers.
      </Container>
      <div className={styles.flex}>
        <div className={styles.institution}>
            <p className={styles.p}>FOR INSTITUTIONS</p>
            <Link className={styles.a}>Create a free account</Link>
        </div>
        <div className={styles.school}>
            <p className={styles.p}>FOR Schools</p>
            <Link className={styles.a2}>Create a free account</Link>
        </div>
       
      </div>
    </div>
  );
}

export default Who;
