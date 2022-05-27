import React from "react";
import styles from "../styles/Skills.module.css";
import {
    SiRedux,
    SiTypescript,
    SiExpress,
    SiMysql,
    SiMongodb,
} from "react-icons/si";
import { BiTimer } from "react-icons/bi";
import { FaNodeJs, FaRunning } from "react-icons/fa";

export default function Skills() {
    return (
        <div className={styles.parent}>
            <div className={styles.subParent}>
                <h2 className={styles.header}>Skills</h2>
                <hr className={styles.hr}></hr>
                <div className={styles.main}>
                    <div className={styles.frontEnd}>
                        <h2>Front-end Skills</h2>
                        <div className={styles.skillsWrap}>
                            <div>
                                <i className="fa-brands fa-html5"></i>HTML5
                            </div>
                            <div>
                                <i className="fa-brands fa-css3-alt"></i>CSS3
                            </div>
                            <div>
                                <i className="fa-brands fa-js"></i>JavaScript
                            </div>
                            <div>
                                <i className="fa-brands fa-react"></i>React
                            </div>
                            <div>
                                <SiRedux />
                                Redux
                            </div>
                            <div>
                                <SiTypescript />
                                TypeScript
                            </div>
                        </div>
                    </div>
                    <div className={styles.backEnd}>
                        <h2>Back-end Skills</h2>
                        <div className={styles.skillsWrap}>
                            <div>
                                <SiExpress />
                                Express.js
                            </div>
                            <div>
                                <FaNodeJs />
                                Node.js
                            </div>
                            <div>
                                <SiMysql />
                                MySQL
                            </div>
                            <div>
                                <SiMongodb />
                                MongoDB
                            </div>
                        </div>
                    </div>
                    <div className={styles.softSkills}>
                        <h2>Soft Skills</h2>
                        <div className={styles.skillsWrap}>
                            <div>
                                <FaRunning />
                                Quick Learner
                            </div>
                            <div>
                                <i className="fa-solid fa-people-group"></i>Team
                                Collaboration
                            </div>
                            <div>
                                <i className="fa-solid fa-laptop-file"></i>
                                Remote Work
                            </div>
                            <div>
                                <BiTimer />
                                Time Management
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
