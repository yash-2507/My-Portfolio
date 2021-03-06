import React, { useState } from "react";
import styles from "../styles/About.module.css";

export default function About() {
    const [isCopied, setIsCopied] = useState(false);
    const copyMail = () => {
        navigator.clipboard.writeText("imyash.654@gmail.com");
        if (isCopied) {
            alert("E-Mail already copied !");
        } else {
            setIsCopied(true);
        }
    };
    return (
        <div className={styles.About_parent}>
            <div className={styles.About_children}>
                <h2 className={styles.About_title}>About</h2>
                <hr className={styles.About_hr}></hr>
                <div className={styles.content}>
                    <p className={styles.About_name}>I'm Yashasvi Srivastava</p>
                    <p className={styles.About_desc}>
                        Observant and meticulous aspiring full-stack web
                        developer with a specialization in MERN stack.
                        Self-motivated and curious, with a keen interest in
                        building user-centric products. Looking forward to
                        sharpen his skills in a demanding workplace.
                    </p>
                    <p className={styles.About_mail}>
                        Drop a mail: imyash.654@gmail.com
                        <i className="fa-solid fa-copy" onClick={copyMail}></i>
                        {isCopied ? (
                            <span className={styles.copied}>copied</span>
                        ) : undefined}
                    </p>
                </div>
            </div>
        </div>
    );
}
