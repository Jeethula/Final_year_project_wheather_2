"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherAlertsList from "@/components/weather/alerts-list";
import WeatherForecast from "@/components/weather/forecast";
import WeatherMap from "@/components/weather/map";

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Weather Alerts</h1>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="map">Weather Map</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-6">
          <WeatherAlertsList />
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <WeatherForecast />
        </TabsContent>

        <TabsContent value="map" className="space-y-6">
          <WeatherMap />
        </TabsContent>
      </Tabs>
    </div>
  );
}