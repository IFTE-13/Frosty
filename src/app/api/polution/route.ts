import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;

        const lat = 41.3828939;
        const lon = 2.1774322;

        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await axios.get(url);
        return NextResponse.json(response.data);

    } catch (error) {
        console.log("Error fetching polution data");
        return new Response("Error fetching polution data", { status: 500 });
    }
}