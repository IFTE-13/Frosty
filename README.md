# Frosty - Weather App

Frosty is a modern weather application that provides the latest weather forecasts and conditions. Built with Next.js, Frosty offers a sleek and user-friendly interface to keep you updated on the weather.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Current weather conditions
- 5-day weather forecast
- UV index, air polution, population, pressure and etc.
- Search by city
- Responsive design
- Easy-to-read weather icons and data

## Tech Stack
- NextJs
- Tailwind CSS
- shadcn/ui
- Moment (time/date)
- Axios
- OpenWeather (for weather api)
- React Leaflet (map api)
- Framer Motion
- Aceternity UI

## Installation

To get started with Frosty, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/frosty-weather-app.git
   cd frosty-weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add your API key for the weather service:

   ```plaintext
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```
> [!Important]
> Get your api key from [`Open Weather`](https://openweathermap.org/).

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage

- Enter the name of a city in the search bar to get the current weather and a 7-day forecast for that location.
- The app will display the temperature, weather conditions, humidity, wind speed, and more.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

1. **Fork the repository**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Commit your changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request**

## License

> [!Caution]
> This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
