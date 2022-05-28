import React from "react";
import styles from "../styles/Intro.module.css";
import MyPic from "../assets/intro.png";

export default function Intro() {
    return (
        <div className={styles.Intro_parent}>
            <div className={styles.Intro_children}>
                <div className={styles.Intro_left}>
                    <div>
                        <p className={styles.Intro_desc}>Hi 👋,</p>
                        <p className={styles.Intro_desc}>
                            I'm{" "}
                            <span className={styles.Intro_myName}>
                                Yashasvi Srivastava
                            </span>
                        </p>
                        <p
                            className={styles.Intro_desc}
                            style={{ fontSize: "2vw", color: "gray" }}
                        >
                            MERN Stack Web Developer
                        </p>
                    </div>
                    <button
                        className={styles.Intro_Resume}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/19ufFZLX96ai_oM4To_OrXKFWs4JiKMSE/view?usp=sharing"
                            )
                        }
                    >
                        Resume<i className="fa-solid fa-download"></i>
                    </button>
                    <div className={styles.Intro_socialLinks}>
                        <a href="https://www.linkedin.com/in/yashasvi-srivastava-13aba5236">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com/yash-2507">
                            <i className="fa-brands fa-github-square"></i>
                        </a>
                        <a href="https://t.me/iAM/YSH">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div className={styles.Intro_right}>
                    <img src={MyPic} alt="" />
                </div>
            </div>
        </div>
    );
}
