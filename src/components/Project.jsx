import React from "react";
import styles from "../styles/Project.module.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import CartIcon from "../assets/Cart.png";
import upGrad from "../assets/upGrad.png";
import JCrew from "../assets/JCrew.png";
import Revv from "../assets/Revv.png";

export default function Project() {
    return (
        <div className={styles.Project_parent}>
            <div className={styles.Project_children}>
                <h2 className={styles.Project_Header}>Projects</h2>
                <hr className={styles.Project_hr}></hr>
                <div className={styles.Project_Wrapper}>
                    <div className={styles.Project_content}>
                        <img src={JCrew} alt="" />
                        <div className={styles.Project_contentWrapper}>
                            <h2 className={styles.Project_header}>
                                J.Crew clone
                            </h2>
                            <p className={styles.Project_desc}>
                                An E-commerce website offering an assortment of
                                women's, men's and children's apparel and home
                                accessories.
                            </p>
                            <p className={styles.Project_desc1}>
                                A collaborative project built by a team of 5
                                executed in 7 days.
                            </p>
                            <p className={styles.Project_tech}>
                                React.Js | Redux Toolkit | Local Storage |
                                Basics of Vanilla Js
                            </p>
                            <div className={styles.Project_btnWrap}>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/yash-2507/J.Crew-Clone"
                                        )
                                    }
                                >
                                    <FaGithub />
                                    Code
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://snazzy-horse-6fab01.netlify.app/"
                                        )
                                    }
                                >
                                    <BiLinkExternal />
                                    Live
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Project_content}>
                        <img src={upGrad} alt="" />
                        <div className={styles.Project_contentWrapper}>
                            <h2 className={styles.Project_header}>
                                upGrad clone
                            </h2>
                            <p className={styles.Project_desc}>
                                A web application for online higher educational
                                platforms. Explore different free and paid
                                courses all over the world.
                            </p>
                            <p className={styles.Project_desc1}>
                                A collaborative project built by a team of 6
                                executed in 5 days.
                            </p>
                            <p className={styles.Project_tech}>
                                HTML | CSS | Javascript | Local Storage
                            </p>
                            <div className={styles.Project_btnWrap}>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/durgeshsoni/upgrad"
                                        )
                                    }
                                >
                                    <FaGithub />
                                    Code
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://reliable-melomakarona-0d573e.netlify.app/"
                                        )
                                    }
                                >
                                    <BiLinkExternal />
                                    Live
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Project_content}>
                        <img src={Revv} alt="" />
                        <div className={styles.Project_contentWrapper}>
                            <h2 className={styles.Project_header}>
                                Revv clone
                            </h2>
                            <p className={styles.Project_desc}>
                                A online platform for car rentals in different
                                locations of India. Subscriptions available for
                                Hyundai and Mahindra.
                            </p>
                            <p className={styles.Project_desc1}>
                                A collaborative project built by a team of 4
                                executed in 7 days.
                            </p>
                            <p className={styles.Project_tech}>
                                HTML | CSS | Javascript | Local Storage
                            </p>
                            <div className={styles.Project_btnWrap}>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/mahendrasingh-engineer/revv-clone-2"
                                        )
                                    }
                                >
                                    <FaGithub />
                                    Code
                                </button>
                                <button>
                                    <BiLinkExternal />
                                    Live
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Project_content}>
                        <img src={CartIcon} alt="" />
                        <div className={styles.Project_contentWrapper}>
                            <h2 className={styles.Project_header}>Mini Cart</h2>
                            <p className={styles.Project_desc}>
                                A simple app using State Management to add,
                                remove or clear items as per users need.
                            </p>
                            <p className={styles.Project_desc1}>
                                Solo project executed in 3 days.
                            </p>
                            <p className={styles.Project_tech}>
                                React.Js | Redux | Redux Toolkit
                            </p>
                            <div className={styles.Project_btnWrap}>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/yash-2507/redux-cart"
                                        )
                                    }
                                >
                                    <FaGithub />
                                    Code
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://spontaneous-marzipan-7f27a7.netlify.app/"
                                        )
                                    }
                                >
                                    <BiLinkExternal />
                                    Live
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
