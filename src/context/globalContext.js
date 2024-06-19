"use client"
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react"

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();


export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});
    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, setUvIndex] = useState({});

    const fetchForecast = async () => {
        try {
            const res = await axios.get("api/weather");
            setForecast(res.data)
        } catch (error) {
            console.log("Error fetching forcast data", error.message)
        }
    };

    const fetchAirQuality = async () => {
        try {
            const res = await axios.get("api/polution");
            setAirQuality(res.data)
        } catch (error) {
            console.log("Error fetching polution data", error.message)
        }
    }

    const fetchFiveDayForecast = async () => {
        try {
            const res = await axios.get("api/fiveday");
            setFiveDayForecast(res.data)
        } catch (error) {
            console.log("Error fetching daily forecast data", error.message)
        }
    }

    const fetchUvIndex = async () => {
        try {
            const res = await axios.get("api/uvindex");
            setUvIndex(res.data)
        } catch (error) {
            console.log("Error fetching uv index data", error.message)
        }
    }

    useEffect(() => {
        fetchForecast();
        fetchAirQuality();
        fetchFiveDayForecast();
        fetchUvIndex();
    }, [])

    return (
        <GlobalContext.Provider value={{
            forecast,
            airQuality,
            fiveDayForecast,
            uvIndex
        }}>
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);