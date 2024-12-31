"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/context/globalContext";
import { Skeleton } from "@/components/ui/skeleton";

interface Coordinates {
  lat: number;
  lon: number;
}

interface FlyToActiveCityProps {
  activeCityCords: Coordinates;
}

function FlyToActiveCity({ activeCityCords }: FlyToActiveCityProps) {
    const map = useMap();

    useEffect(() => {
        const zoomLevel = 13;
        const flyToOptions = {
            duration: 1.5,
        };

        map.flyTo(
            [activeCityCords.lat, activeCityCords.lon],
            zoomLevel,
            flyToOptions
        );
    }, [activeCityCords, map]);

    return null;
}

function Map() {
    const { forecast } = useGlobalContext();

    // Ensure coordinates exist and match expected structure
    const coordinates = forecast?.coord as Coordinates | undefined;
    
    if (!coordinates?.lat || !coordinates?.lon) {
        return <Skeleton className="h-[12rem] w-full" />;
    }

    return (
        <div className="flex-1 basis-[50%] border rounded-lg">
            <MapContainer
                center={[coordinates.lat, coordinates.lon]}
                zoom={13}
                scrollWheelZoom={false}
                className="rounded-lg m-4"
                style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <FlyToActiveCity activeCityCords={coordinates} />
            </MapContainer>
        </div>
    );
}

export default Map;