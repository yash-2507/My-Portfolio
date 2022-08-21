import React from 'react';
import './MoveTop.scss';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default function MoveTop() {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='move-top' onClick={handleScroll}>
            <IoIosArrowDropupCircle />
        </div>
    );
}
