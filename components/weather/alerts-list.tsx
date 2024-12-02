"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Bell, Shield } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Hurricane Warning",
    location: "Eastern Coastline",
    severity: "Severe",
    description: "Category 3 hurricane approaching. Expected landfall in 24 hours.",
    time: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    type: "Flash Flood Warning",
    location: "River Valley Region",
    severity: "High",
    description: "Heavy rainfall causing rapid water level rise. Immediate evacuation advised.",
    time: "1 hour ago",
    status: "Active",
  },
  {
    id: 3,
    type: "Severe Thunderstorm",
    location: "Central District",
    severity: "Moderate",
    description: "Strong winds and lightning expected. Seek shelter immediately.",
    time: "30 minutes ago",
    status: "Active",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "severe":
      return "destructive";
    case "high":
      return "warning";
    default:
      return "secondary";
  }
};

export default function WeatherAlertsList() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Active Weather Alerts
            </CardTitle>
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              Subscribe to Alerts
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-orange-500" />
                          <span className="font-semibold">{alert.type}</span>
                        </div>
                        <Badge variant={getSeverityColor(alert.severity) as any}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {alert.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{alert.location}</span>
                          <span className="text-muted-foreground">{alert.time}</span>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Take Action</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}