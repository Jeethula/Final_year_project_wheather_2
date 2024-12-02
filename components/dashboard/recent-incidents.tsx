"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const incidents = [
  {
    id: 1,
    location: "Downtown District",
    type: "Flooding",
    severity: "High",
    time: "30 minutes ago",
    status: "Active",
  },
  {
    id: 2,
    location: "Eastern Coast",
    type: "Storm Surge",
    severity: "Critical",
    time: "1 hour ago",
    status: "Active",
  },
  {
    id: 3,
    location: "Northern Region",
    type: "Wildfire",
    severity: "Medium",
    time: "2 hours ago",
    status: "Contained",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "destructive";
    case "high":
      return "warning";
    default:
      return "secondary";
  }
};

export default function RecentIncidents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Incidents</CardTitle>
        <CardDescription>Latest reported emergencies and status</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="flex flex-col space-y-2 border-b pb-4 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{incident.location}</span>
                  <Badge variant={getSeverityColor(incident.severity) as any}>
                    {incident.severity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>{incident.type}</span>
                  <span className="text-muted-foreground">{incident.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span
                    className={
                      incident.status === "Active"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {incident.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}