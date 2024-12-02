"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const incidents = [
  {
    id: "INC-001",
    type: "Flood",
    location: "Downtown District",
    date: "2024-03-15",
    severity: "High",
    status: "Resolved",
    responseTime: "45 mins",
  },
  {
    id: "INC-002",
    type: "Fire",
    location: "Industrial Zone",
    date: "2024-03-14",
    severity: "Critical",
    status: "Resolved",
    responseTime: "15 mins",
  },
  {
    id: "INC-003",
    type: "Storm Damage",
    location: "Coastal Area",
    date: "2024-03-13",
    severity: "Medium",
    status: "Archived",
    responseTime: "30 mins",
  },
];

export default function IncidentHistory() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle>Incident History</CardTitle>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search incidents..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Response Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidents.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell className="font-medium">{incident.id}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{incident.status}</Badge>
                  </TableCell>
                  <TableCell>{incident.responseTime}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}