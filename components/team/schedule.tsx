"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Users } from "lucide-react";

const shifts = [
  {
    id: 1,
    team: "Emergency Response A",
    time: "08:00 - 16:00",
    members: 5,
    status: "Active",
  },
  {
    id: 2,
    team: "Medical Team B",
    time: "16:00 - 00:00",
    members: 4,
    status: "Upcoming",
  },
  {
    id: 3,
    team: "Logistics Team C",
    time: "00:00 - 08:00",
    members: 3,
    status: "Upcoming",
  },
];

export default function TeamSchedule() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Team Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" className="rounded-md border" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Today's Shifts</CardTitle>
            <Button>Add Shift</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {shifts.map((shift) => (
                <Card key={shift.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{shift.team}</span>
                        <Badge
                          variant={
                            shift.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {shift.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{shift.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {shift.members} members
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Team
                        </Button>
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