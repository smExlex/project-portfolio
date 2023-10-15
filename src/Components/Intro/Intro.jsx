import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { Heading1 } from "../Heading1/Heading1";
import { Heading3 } from "../Heading3/Heading3";

import "./Intro.css";

export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-wrapper">
        <div className="photo-wrapper">
          <ProfilePicture />
        </div>

        <div className="header-wrapper">
          <Heading3 text={"Hi, I'm Susanne Ekenheim"} />
          <Heading1 className={"info-h1"} text={"Frontend Developer"} />
        </div>
        <div className="info-text">
          <p>
            Susanne is a budding developer with a genuine interest in innovative
            solutions and a strong desire to refine her coding skills. With her
            extensive experience as a manager in customer service she brings a
            unique perspective to her work. In addition, Susanne is particularly
            enthusiastic about incorporating accessibility features into her
            projects, ensuring inclusivity and usability for all users. In her
            current role, she serves as a vital link between customers and
            technology, utilizing her skills to develop user-friendly
            applications and tackle complex challenges. Her unwavering
            commitment to maintaining high standards underscores her value as a
            contributing member of any project, distinguishing her in the
            technology field.
          </p>
        </div>
      </div>
      <div className="arrow">
        <img src="/arrow_down.svg" />
      </div>
    </section>
  );
};
