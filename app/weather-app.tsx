"use client";
import { Sun, Cloud, CloudRain, MapPin } from "phosphor-react";
import axios from "axios";
import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API}&units=metric`,
      );
      setWeather(res.data);
    } catch (err: any) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900">
      <form onSubmit={fetchWeather} className="flex gap-2 mb-8">
        <input
          className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-zinc-300 bg-white text-zinc-900"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {weather && (
        <div className="w-full max-w-sm rounded-xl border bg-white shadow-sm p-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={20} />
            <span className="font-semibold text-lg">
              {weather.name}, {weather.sys.country}
            </span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            {weather.weather[0].main === "Clear" && <Sun size={48} />}
            {weather.weather[0].main === "Clouds" && <Cloud size={48} />}
            {weather.weather[0].main === "Rain" && <CloudRain size={48} />}
            <span className="text-5xl font-bold">
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
          <div className="capitalize text-zinc-600 mb-2">
            {weather.weather[0].description}
          </div>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <div>
              Humidity:{" "}
              <span className="font-medium text-zinc-900">
                {weather.main.humidity}%
              </span>
            </div>
            <div>
              Wind:{" "}
              <span className="font-medium text-zinc-900">
                {Math.round(weather.wind.speed)} m/s
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
