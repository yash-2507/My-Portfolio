import React from "react";
import "../styles/Loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-parent">
                <div className="loading-ring"></div>
                <div className="loading-ring"></div>
                <div className="loading-ring"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
}
