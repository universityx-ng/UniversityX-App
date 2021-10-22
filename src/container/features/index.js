import React from "react";
import feat1 from "../../assets/img/1.png";
import feat2 from "../../assets/img/2.png";
import feat3 from "../../assets/img/3.png";
import feat4 from "../../assets/img/4.png";
import feat5 from "../../assets/img/5.png";
import feat6 from "../../assets/img/6.png";
import feat7 from "../../assets/img/7.png";
import feat8 from "../../assets/img/8.png";

import styles from "./style.module.css";

function Features() {
  const [features] = React.useState([
    {
      image: feat1,
      title: "HD Lecture Videos",
      description:
        "Watch high quality lecture videos by your university lecturers",
    },
    {
      image: feat2,
      title: "Learn with Friends",
      description:
        "Share materials with your course mates and friends. Enjoy learning together",
    },
    {
      image: feat3,
      title: "100+ Past Questions",
      description:
        "Watch high quality lecture videos by your university lecturers",
    },
    {
      image: feat4,
      title: "Interactive Forums",
      description: "Create topics, answer questions and interact with peers.",
    },
    {
      image: feat5,
      title: "Free Textbooks",
      description: "Download free textbooks and handouts from our E-library.",
    },
    {
      image: feat6,
      title: "Value Added Tools",
      description:
        "Enjoy value added tools like GPA calculator, Periodic table etc.",
    },
    {
      image: feat7,
      title: "Direct Messages",
      description:
        "Chat with your lecturers and friends, ask questions and interact.",
    },
    {
      image: feat8,
      title: "Enjoy Xtra-classes",
      description:
        "Learn from independent creators, just like your regular tutorial center.",
    },
  ]);
  return (
    <div>
      <p className={styles.ctx}></p>
      <div className={styles.grid}>
        {features.map((feat, index) => (
          <div className={styles.parentF}>
            <div className={styles.childF}>
              <img className={styles.childimg} src={feat.image} alt="" />
              <p className={styles.childp}>{feat.title}</p>
              <p className={styles.childdesc}>{feat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
