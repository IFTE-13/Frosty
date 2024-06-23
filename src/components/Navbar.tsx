"use client"

import React from 'react';
import { github } from '@/utils/icons';
import TheamDropDown from './TheamDropDown';
import SearchField from './SearchField';
import Shimmer from './ui/shimmer';

const Navbar = () => {

    const handleShimmerClick = () => {
        window.open("https://github.com/IFTE-13/Frosty", "_blank");
    };

    return (
        <div className='w-full py-4 flex items-center justify-between'>
            <div className="left"></div>
            <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                <SearchField />
                <div className="btn-group flex items-center gap-2">
                    <TheamDropDown />
                    <Shimmer onClick={handleShimmerClick} logo={github} text={"Source Code"}  />
                </div>
            </div>
        </div>
    )
}

export default Navbar