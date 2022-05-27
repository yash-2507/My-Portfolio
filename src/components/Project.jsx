import React from "react";
import styles from "../styles/Project.module.css";

export default function Project() {
    return (
        <div className={styles.Project_parent}>
            <div className={styles.Project_children}>
                <h2 className={styles.Project_Header}>Projects</h2>
                <hr className={styles.Project_hr}></hr>
                <div className={styles.Project_Wrapper}></div>
            </div>
        </div>
    );
}
