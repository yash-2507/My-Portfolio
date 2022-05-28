import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

export default function Navbar() {
    return (
        <div className={styles.Nav_parent}>
            <div className={styles.Nav_right}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className={styles.Nav_listWrapper}>
                    <li
                        className={styles.Nav_list}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Link to="/#home">Home</Link>
                    </li>
                    <li
                        className={styles.Nav_list}
                        onClick={() => {
                            window.scrollTo({
                                top: 500,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Link to="/#about">About</Link>
                    </li>
                    <li
                        className={styles.Nav_list}
                        onClick={() => {
                            window.scrollTo({
                                top: 880,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Link to="/#about">Skills</Link>
                    </li>
                    <li
                        className={styles.Nav_list}
                        onClick={() => {
                            window.scrollTo({
                                top: 1450,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Link to="/#projects">Projects</Link>
                    </li>
                    <li
                        className={styles.Nav_list}
                        onClick={() => {
                            window.scrollTo({
                                top: 3000,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Link to="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
