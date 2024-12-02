"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";

const forecast = [
  {
    day: "Today",
    temp: "32°C",
    condition: "Sunny",
    icon: Sun,
    precipitation: "0%",
    humidity: "45%",
    windSpeed: "10 km/h",
  },
  {
    day: "Tomorrow",
    temp: "28°C",
    condition: "Cloudy",
    icon: Cloud,
    precipitation: "20%",
    humidity: "65%",
    windSpeed: "15 km/h",
  },
  {
    day: "Wednesday",
    temp: "25°C",
    condition: "Rainy",
    icon: CloudRain,
    precipitation: "80%",
    humidity: "85%",
    windSpeed: "25 km/h",
  },
];

export default function WeatherForecast() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {forecast.map((day) => (
        <Card key={day.day}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{day.day}</span>
              <day.icon className="h-6 w-6 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">{day.temp}</span>
                <span className="text-muted-foreground">{day.condition}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Precipitation</span>
                  <span>{day.precipitation}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Humidity</span>
                  <span>{day.humidity}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Wind Speed</span>
                  <span>{day.windSpeed}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}