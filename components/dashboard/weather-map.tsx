"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WeatherMap() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Weather Risk Map</CardTitle>
            <CardDescription>Real-time weather patterns and risks</CardDescription>
          </div>
          <Badge variant="destructive">High Risk Areas: 3</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Weather Map</p>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Temperature</span>
            <span className="font-medium">32°C</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Wind Speed</span>
            <span className="font-medium">45 km/h</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Precipitation</span>
            <span className="font-medium">80%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}