import React from "react";
import styles from "../styles/Intro.module.css";
import MyPic from "../assets/intro.png";
import "../styles/Intro.css";

export default function Intro() {
    return (
        <div className={styles.Intro_parent}>
            <div className={styles.Intro_children}>
                <div className={styles.Intro_left}>
                    <div>
                        <p className={styles.Intro_desc}>
                            Hi there<span class="wave">👋</span>, I'm
                        </p>
                        <p className={styles.Intro_desc}>
                            <span className={styles.Intro_myName}>
                                Yashasvi Srivastava
                            </span>
                        </p>
                        <div className="introDescWrap">
                            <span className="staticText">
                                I'm a Full Stack Web Developer with
                                specialization in
                            </span>
                            <ul className="dynamicText">
                                <li>MongoDB</li>
                                <li>ExpressJs</li>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                            </ul>
                            <div className="staticText lastPhase">
                                Tech Stacks.
                            </div>
                        </div>
                    </div>
                    <button
                        className={styles.Intro_Resume}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1DwAvC0xTozToU8curA9uJH8gv2bmY0Di/view?usp=sharing"
                            )
                        }
                    >
                        Resume<i className="fa-solid fa-download"></i>
                    </button>
                    <div className={styles.Intro_socialLinks}>
                        <a href="https://www.linkedin.com/in/yashasvi-srivastava-13aba5236">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.github.com/yash-2507">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://t.me/iAM/YSH">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div className={styles.Intro_right}>
                    <div className={styles.IntroPic_Wrapper}>
                        <img src={MyPic} alt="" />
                        <div className={styles.imageBack}></div>
                        <div className={styles.imageBack}></div>
                    </div>
                    {/* <img src={Decorate1} className="Decorate1" alt="" /> */}
                </div>
            </div>
        </div>
    );
}
