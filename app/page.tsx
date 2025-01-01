"use client"

import dynamic from 'next/dynamic';
const MapComponent = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
});
import Navbar from "@/app/components/Navbar";
import Temperature from "@/app/components/Temperature";
import defaultLocations from "@/utils/defaultLocations";
import { useGlobalContext } from '@/context/globalContext';
import AirPolution from '@/app/components/AirPolution';
import Sunset from "@/app/components/Sunset";
import Wind from "@/app/components/Wind";
import FiveDayForecast from "@/app/components/FiveDayForecast";
import UvIndex from "@/app/components/UvIndex";
import Population from "@/app/components/Population";
import DailyForecast from "@/app/components/DailyForecase";
import FeelsLike from "@/app/components/FeelsLike";
import Humidity from "@/app/components/Humidity";
import Visibility from "@/app/components/Visibility";
import Pressure from "@/app/components/Pressure";

interface Location {
  name: string;
  lat: number;
  lon: number;
}

export default function Home() {
  const { setActiveCityCords } = useGlobalContext();

  const handleLocationSelect = (lat: number, lon: number) => {
    setActiveCityCords([lat, lon]);
  };

  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
        <Temperature />
        <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
            <AirPolution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <MapComponent />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultLocations.map((location: Location, index: number) => {
                  return (
                    <div
                      key={index}
                      className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                      onClick={() => handleLocationSelect(location.lat, location.lon)}
                    >
                      <p className="px-6 py-4">{location.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}