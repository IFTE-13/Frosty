"use client"
import defaultLocations from "@/utils/defaultLocations";
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react"
import { debounce } from "lodash";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});
    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, setUvIndex] = useState({});
    const [geoCodedList, setGeoCodedList] = useState(defaultLocations);
    const [inputValue, setInputValue] = useState("");
    const [activeCityCords, setActiveCityCords] = useState([51.75201, -1.257726]);

    const fetchForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
            setForecast(res.data)
        } catch (error) {
            console.log("Error fetching forcast data: ", error.message)
        }
    };

    const fetchAirQuality = async (lat, lon) => {
        try {
            const res = await axios.get(`api/polution?lat=${lat}&lon=${lon}`);
            setAirQuality(res.data)
        } catch (error) {
            console.log("Error fetching polution data: ", error.message)
        }
    }

    const fetchFiveDayForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);
            setFiveDayForecast(res.data)
        } catch (error) {
            console.log("Error fetching daily forecast data: ", error.message)
        }
    }

    const fetchUvIndex = async (lat, lon) => {
        try {
            const res = await axios.get(`api/uvindex?lat=${lat}&lon=${lon}`);
            setUvIndex(res.data)
        } catch (error) {
            console.log("Error fetching uv index data: ", error.message)
        }
    }

    const fetchGeoCodedList = async (search) => {
        try {
            const res = await axios.get(`api/geocoded?search=${search}`);
            setGeoCodedList(res.data);
        } catch (error) {
            console.log("Error fetching geocoded list: ", error.message)
        }
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
        
        if (e.target.value === "") {
            setGeoCodedList(defaultLocations || []);
        }
    };

    useEffect(() => {
        const debouncedFetch = debounce((search) => {
            fetchGeoCodedList(search);
        }, 500);

        if (inputValue) {
            debouncedFetch(inputValue);
        }

        return () => debouncedFetch.cancel();
    }, [inputValue]);

    useEffect(() => {
        fetchForecast(activeCityCords[0], activeCityCords[1]);
        fetchAirQuality(activeCityCords[0], activeCityCords[1]);
        fetchFiveDayForecast(activeCityCords[0], activeCityCords[1]);
        fetchUvIndex(activeCityCords[0], activeCityCords[1]);
    }, [activeCityCords])

    const contextValue = {
        forecast,
        airQuality,
        fiveDayForecast,
        uvIndex,
        geoCodedList,
        inputValue,
        handleInput,
        activeCityCords,
        setActiveCityCords
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};