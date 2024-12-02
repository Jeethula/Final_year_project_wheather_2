"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin, Users } from "lucide-react";

const activeIncidents = [
  {
    id: 1,
    type: "Flash Flood",
    location: "Downtown District",
    severity: "High",
    affectedArea: "2.5 km²",
    peopleAffected: "~1,200",
    status: "Response in Progress",
    lastUpdate: "10 minutes ago",
  },
  {
    id: 2,
    type: "Building Fire",
    location: "Industrial Zone",
    severity: "Critical",
    affectedArea: "0.5 km²",
    peopleAffected: "~300",
    status: "Containment Phase",
    lastUpdate: "5 minutes ago",
  },
  {
    id: 3,
    type: "Power Outage",
    location: "Residential Area",
    severity: "Medium",
    affectedArea: "1.8 km²",
    peopleAffected: "~3,000",
    status: "Assessment Phase",
    lastUpdate: "15 minutes ago",
  },
];

export default function ActiveIncidents() {
  return (
    <div className="grid gap-6">
      {activeIncidents.map((incident) => (
        <Card key={incident.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                {incident.type}
              </CardTitle>
              <Badge
                // variant={
                //   incident.severity === "Critical"
                //     ? "destructive"
                //     : incident.severity === "High"
                //     ? "warning"
                //     : "secondary"
                // }
              >
                {incident.severity}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{incident.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {incident.peopleAffected} affected
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Affected Area: </span>
                    <span className="font-medium">{incident.affectedArea}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Last Update: </span>
                    <span className="font-medium">{incident.lastUpdate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{incident.status}</Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Respond</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}