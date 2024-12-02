"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, MapPin, ZoomIn } from "lucide-react";

export default function WeatherMap() {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            Interactive Weather Map
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Live Updates</Badge>
            <Button variant="outline" size="sm">
              <Layers className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] rounded-lg bg-gray-100 dark:bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Weather Map</p>
          </div>
          <div className="absolute bottom-4 right-4 space-y-2">
            <Card className="w-48">
              <CardContent className="p-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Temperature</span>
                    <span className="font-medium">28°C</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Wind</span>
                    <span className="font-medium">15 km/h</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Humidity</span>
                    <span className="font-medium">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}