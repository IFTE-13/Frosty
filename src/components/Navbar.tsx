"use client"

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { github } from '@/utils/icons';
import TheamDropDown from './TheamDropDown';
import SearchField from './SearchField';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='w-full py-4 flex items-center justify-between'>
            <div className="left"></div>
            <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                <SearchField />
                <div className="btn-group flex items-center gap-2">
                    <TheamDropDown />
                    <Button
                        onClick={() => {
                            router.push("https//github.com")
                        }}
                        className='source-code felx items-center gap-2'>
                        {github} Source Code
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar