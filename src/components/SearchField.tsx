"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { commandIcon, searchIcon } from '@/utils/icons'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from './ui/command'
import { useGlobalContext, useGlobalContextUpdate } from '@/context/globalContext'

interface GeocodedItem {
    name: string;
    country: string;
    state?: string;
    lat: number;
    lon: number;
}

function SearchField() {
    const { geoCodedList, inputValue, handleInput } = useGlobalContext();
    const { setActiveCityCords } = useGlobalContextUpdate();

    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    const getClickedCoords = (lat: number, lon: number) => {
        setActiveCityCords([lat, lon]);
    };

    return (
        <div className='search-btn'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
                    >
                        {searchIcon}
                        <p className="text-sm text-muted-foreground mx-2">Search</p>
                        <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
                            {commandIcon}
                            <span className="text-[9px]">F</span>
                        </div>
                    </Button>
                </DialogTrigger>

                <DialogContent className="p-0">
                    <Command className=" rounded-lg border shadow-md">
                        <CommandInput
                            placeholder="Type to search..."
                            value={inputValue}
                            onChangeCapture={handleInput}
                        />
                        <CommandList>
                        <ul className='px-3 pb-2'>
                            {geoCodedList && geoCodedList.length === 0 && (
                                <CommandEmpty>No results found.</CommandEmpty>
                            )}
                            <p className="p-2 text-sm text-muted-foreground">Suggestions</p>
                            {Array.isArray(geoCodedList) && geoCodedList.length > 0 && (
                                geoCodedList.map(
                                    (item, index) => {
                                        const { name, country, state, lat, lon } = item;
                                        return (
                                            <li
                                                key={index}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                className={`py-3 px-2 text-sm rounded-sm cursor-default ${hoveredIndex === index ? "bg-accent" : ""
                                                    }`}
                                                onClick={() => {
                                                    getClickedCoords(lat, lon);
                                                }}
                                            >
                                                <p className="text">
                                                    {name}, {state ? `${state},` : ""} {country}
                                                </p>
                                            </li>
                                        );
                                    }
                                )
                            )}
                        </ul>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SearchField