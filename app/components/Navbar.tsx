"use client"

import { github } from '@/utils/icons';
import TheamDropDown from './TheamDropDown';
import SearchField from './SearchField';
import { Button } from '@/components/ui/button';


const Navbar = () => {
    return (
        <div className='w-full py-4 flex items-center justify-between'>
            <div className="left"></div>
            <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                <SearchField />
                <div className="btn-group flex items-center gap-2">
                    <TheamDropDown />
                    <a href="https://github.com/IFTE-13/Frosty" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar