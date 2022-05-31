import * as React from "react";

const NavBackground = (props) => (
    <svg width={900} height={30} xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <filter id="a" x="-10%" y="-10%" width="120%" height="120%">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation={17}
                    result="effect1_foregroundBlur"
                />
            </filter>
        </defs>
        <path fill="#E3FCBF" d="M0 0h900v30H0z" />
        <g filter="url(#a)">
            <circle cx={389} cy={25} fill="#00FFAB" r={37.5} />
            <circle cx={240} cy={26} fill="#E3FCBF" r={37.5} />
            <circle cx={364} cy={3} fill="#00FFAB" r={37.5} />
            <circle cx={273} cy={22} fill="#00FFAB" r={37.5} />
            <circle cx={425} cy={11} fill="#E3FCBF" r={37.5} />
            <circle cx={414} cy={28} fill="#00FFAB" r={37.5} />
        </g>
    </svg>
);

export default NavBackground;
