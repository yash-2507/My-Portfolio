import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className={styles.Nav_parent}>
            <div className={styles.Nav_right}>
                <ul className={styles.Nav_listWrapper}>
                    <li className={styles.Nav_list}>
                        <Link to="/#home">Home</Link>
                    </li>
                    <li className={styles.Nav_list}>
                        <Link to="/#about">About</Link>
                    </li>
                    <li className={styles.Nav_list}>
                        <Link to="/#about">Skills</Link>
                    </li>
                    <li className={styles.Nav_list}>
                        <Link to="/#projects">Projects</Link>
                    </li>
                    <li className={styles.Nav_list}>
                        <Link to="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
