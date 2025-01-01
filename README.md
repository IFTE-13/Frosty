# Frosty - Weather App

Frosty is a modern weather application that provides the latest weather forecasts and conditions. Built with Next.js, Frosty offers a sleek and user-friendly interface to keep you updated on the weather.

## 🖥️ Features

- Current weather conditions
- 5-day weather forecast
- UV index, air polution, population, pressure and etc.
- Search by city
- Responsive design
- Easy-to-read weather icons and data

## 🚀 Tech Stack
- [**Next.js**](https://nextjs.org/): A React framework for building fast and scalable web applications.  
- [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.  
- [**shadcn/ui**](https://ui.shadcn.dev/): A collection of pre-designed components built with Tailwind CSS and Radix.  
- [**Moment.js**](https://momentjs.com/): A library for parsing, validating, manipulating, and formatting dates and times.  
- [**Axios**](https://axios-http.com/): A promise-based HTTP client for making requests.  
- [**React Leaflet**](https://react-leaflet.js.org/): A React wrapper for Leaflet to create interactive maps.
- [**Open Weather**](https://openweathermap.org/): A comprehensive weather data services, including current, forecast, and historical weather information.


## 📦 Installation

To get started with Frosty, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/IFTE-13/frosty.git
   cd frosty
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add your API key for the weather service:

   ```plaintext
   OPENWEATHER_API_KEY=your_api_key_here
   ```
> [!Important]
> Get your api key from [`Open Weather`](https://openweathermap.org/).

4. **Run the development server:**

   ```bash
   pnpm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## 🤝 Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

1. **Fork the repository**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Commit your changes:**

   ```bash
   git commit -m '<type>[optional scope]: <description>'
   ```

5. **Push to the branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request**

## 📝 License

> [!Caution]
> This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
