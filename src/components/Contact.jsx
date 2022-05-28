import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <div className={styles.Contact_parent}>
            <div className={styles.Contact_subParent}>
                <div>
                    <p className={styles.Contact_header}>Let's Connect ...</p>
                    <hr className={styles.Contact_hr}></hr>
                </div>
                <p className={styles.Contact_name}>Yashasvi Srivastava</p>
                <div className={styles.Contact_socialWrapper}>
                    <div className={styles.Contact_social}>
                        <a href="https://www.linkedin.com/in/yashasvi-srivastava-13aba5236">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href="mailto:imyash.654@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href="tel:+916387353140">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                    <div className={styles.Contact_social}>
                        <a href="https://t.me/iAM_YSH">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <p className={styles.Contact_copyright}>
                    © 2022 copyright all right reserved
                </p>
            </div>
        </div>
    );
}
