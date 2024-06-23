import AirPolution from "@/components/AirPolution";
import DailyForecast from "@/components/DailyForecase";
import FeelsLike from "@/components/FeelsLike";
import FiveDayForecast from "@/components/FiveDayForecast";
import Humidity from "@/components/Humidity";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Population from "@/components/Population";
import Pressure from "@/components/Pressure";
import Sunset from "@/components/Sunset";
import Temperature from "@/components/Temperature";
import TheamDropDown from "@/components/TheamDropDown";
import UvIndex from "@/components/UvIndex";
import Visibility from "@/components/Visibility";
import Wind from "@/components/Wind";
import defaultLocations from "@/utils/defaultLocations";

export default function Home() {

  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
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
            <Map />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultLocations.map((location, index) => {
                  return (
                    <div
                      key={index}
                      className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"

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
      <footer className="py-4 flex justify-start pb-8">
        <p className="footer-text text-sm flex items-start gap-1">
          <a
            href=""
            target="_blank"
          >
            Pixelize@2024
          </a>
        </p>
      </footer>
    </main>
  );
}
