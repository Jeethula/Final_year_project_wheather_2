"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Layers, MapPin } from "lucide-react";

const zones = [
  {
    id: 1,
    name: "Coastal Region A",
    type: "Hurricane Zone",
    risk: "High",
    affected: "15,000",
  },
  {
    id: 2,
    name: "Valley District B",
    type: "Flood Risk",
    risk: "Medium",
    affected: "8,000",
  },
  {
    id: 3,
    name: "Mountain Area C",
    type: "Landslide Risk",
    risk: "High",
    affected: "3,000",
  },
];

export default function DisasterMap() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Disaster Risk Zones
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Layers className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Disaster Map</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {zones.map((zone) => (
          <Card key={zone.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{zone.name}</CardTitle>
                <Badge
                  // variant={zone.risk.toLowerCase() === "high" ? "destructive" : "warning"}
                >
                  {zone.risk} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type</span>
                  <span className="text-sm font-medium">{zone.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Affected Population
                  </span>
                  <span className="text-sm font-medium">{zone.affected}</span>
                </div>
                <Button className="w-full mt-2" variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}