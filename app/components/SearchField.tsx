"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { commandIcon, searchIcon } from '@/utils/icons';
import { Command, CommandEmpty, CommandInput, CommandList } from '@/components/ui/command';
import { useGlobalContext } from '@/context/globalContext';

interface GeocodedItem {
    name: string;
    country: string;
    state?: string;
    lat: number;
    lon: number;
}

function SearchField() {
    const { geoCodedList, inputValue, handleInput, setActiveCityCords } = useGlobalContext();
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false); // Control dialog state

    const handleCoordSelect = (lat: number, lon: number) => {
        setActiveCityCords([lat, lon]);
        setDialogOpen(false); // Close the dialog on selection
    };

    return (
        <div className='search-btn'>
            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
                        onClick={() => setDialogOpen(true)} // Open the dialog
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
                    <Command className="rounded-lg border shadow-md">
                        <CommandInput
                            placeholder="Type to search..."
                            value={inputValue}
                            onChangeCapture={(e) => handleInput(e)}
                        />
                        <CommandList>
                            <ul className='px-3 pb-2'>
                                {(!geoCodedList || geoCodedList.length === 0) && (
                                    <CommandEmpty>No results found.</CommandEmpty>
                                )}
                                <p className="p-2 text-sm text-muted-foreground">Suggestions</p>
                                {Array.isArray(geoCodedList) && geoCodedList.length > 0 && (
                                    geoCodedList.map((item: GeocodedItem, index: number) => {
                                        const { name, country, state, lat, lon } = item;
                                        return (
                                            <li
                                                key={index}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                className={`py-3 px-2 text-sm rounded-sm cursor-default ${
                                                    hoveredIndex === index ? "bg-accent" : ""
                                                }`}
                                                onClick={() => handleCoordSelect(lat, lon)}
                                            >
                                                <p className="text">
                                                    {name}, {state ? `${state},` : ""} {country}
                                                </p>
                                            </li>
                                        );
                                    })
                                )}
                            </ul>
                        </CommandList>
                    </Command>
                    
                    <DialogTitle className='hidden'></DialogTitle>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SearchField;
