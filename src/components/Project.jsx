import React from "react";
import styles from "../styles/Project.module.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import upGrad from "../assets/upGrad.png";
import JCrew from "../assets/JCrew.png";
import Revv from "../assets/Revv.png";
import Bewakoof from "../assets/Bewakoof.png";

export default function Project() {
    const projects = [
        {
            title: "Bewakoof Clone",
            desc: "An e-commerce website clone with user authentication and great assortment of women's, men's and home accessories.",
            exec: "A collaborative project built by a team of 5 executed in 5 days.",
            tools: "React.js | Redux | Express.js | MongoDB | Node.js",
            github: "https://github.com/yash-2507/Bewakoof-Clone/tree/main",
            live: "https://heady-rabbits-8957.vercel.app/",
            image: Bewakoof,
        },
        {
            title: "J.Crew Clone",
            desc: "An E-commerce website offering an assortment of women's, men's and children's apparel and home accessories.",
            exec: "A collaborative project built by a team of 5 executed in 7 days.",
            tools: "React.js | Redux Toolkit | Local Storage | Basics of Vanilla Js",
            github: "https://github.com/yash-2507/J.Crew-Clone",
            live: "https://snazzy-horse-6fab01.netlify.app/",
            image: JCrew,
        },
        {
            title: "upGrad Clone",
            desc: "A web application for online higher educational platforms. Explore different free and paid courses all over the world.",
            exec: "A collaborative project built by a team of 6 executed in 5 days.",
            tools: "HTML | CSS | Javascript | Local Storage",
            github: "https://github.com/durgeshsoni/upgrad",
            live: "https://reliable-melomakarona-0d573e.netlify.app/",
            image: upGrad,
        },
        {
            title: "Revv clone",
            desc: "An online platform for car rentals in different locations of India. Subscriptions available for Hyundai and Mahindra.",
            exec: "A collaborative project built by a team of 4 executed in 7 days.",
            tools: "HTML | CSS | Javascript | Local Storage",
            github: "https://github.com/mahendrasingh-engineer/revv-clone-2",
            live: "https://reliable-melomakarona-0d573e.netlify.app/",
            image: Revv,
        },
        
    ]
    return (
        <div className={styles.Project_parent}>
            <div className={styles.Project_children}>
                <h2 className={styles.Project_Header}>Projects</h2>
                <hr className={styles.Project_hr}></hr>
                <div className={styles.Project_Wrapper}>
                    {
                        projects.map(project => {
                            return (
                                <>
                                    <div className={styles.Project_content}>
                                        <img src={project.image} alt="" />
                                        <div className={styles.Project_contentWrapper}>
                                            <h2 className={styles.Project_header}>
                                                {project.title}
                                            </h2>
                                            <p className={styles.Project_desc}>
                                                {project.desc}
                                            </p>
                                            <p className={styles.Project_desc1}>
                                                {project.exec}
                                            </p>
                                            <p className={styles.Project_tech}>
                                                {project.tools}
                                            </p>
                                            <div className={styles.Project_btnWrap}>
                                                <button
                                                    onClick={() =>
                                                        window.open(
                                                            project.github
                                                        )
                                                    }
                                                >
                                                    <FaGithub />
                                                    Code
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        window.open(
                                                            project.live
                                                        )
                                                    }
                                                >
                                                    <BiLinkExternal />
                                                    Live
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
}
