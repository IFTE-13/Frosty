"use client"

import { github } from '@/utils/icons';
import TheamDropDown from './TheamDropDown';
import SearchField from './SearchField';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="w-full py-4 flex items-center justify-between">
      <div className="left hidden md:block lg:block">made by <Link href={"https://github.com/ifte-13"} target='_blank'>Ifte-13</Link></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchField />

        <div className="btn-group flex items-center gap-2">
          <TheamDropDown />

          <Button
            className="source-code-btn flex items-center gap-2"
            effect={"gooeyLeft"}
          >
            <Link href={"https://github.com/ifte-13/frosty"} target='_blank' className='flex flex-row gap-x-2 justify-center items-center'>{github} Source Code</Link>
          </Button>
        </div>
      </div>
    </div>
    )
}

export default Navbar