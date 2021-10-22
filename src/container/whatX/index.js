import React from "react";
import styles from "./style.module.css";
import version2 from "../../assets/img/Version2.png";

function Whatx() {
  return (
    <div>
      <p className={styles.ctx}>What is UniversityX</p>
      <div className={styles.flex}>
        <div>
          <p className={styles.p}>
            University-X is an E-learning platform that allows tertiary students
            take online classes from their universities anchored by their
            lecturers.
          </p>
          <p className={styles.p} eeeeeeeeeeeeee>
          They can also practice past questions, take practice tests, download
          textbooks and many more. UniversityX has been created to simplify your
          learning process, even if you attend a four-block wall university.

          </p>
        </div>
        <img src={version2} alt="" />
      </div>
    </div>
  );
}

export default Whatx;
