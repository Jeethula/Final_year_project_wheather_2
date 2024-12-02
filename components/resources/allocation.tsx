"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package, Truck, Users } from "lucide-react";

const resources = [
  {
    id: 1,
    name: "Medical Supplies",
    allocated: 75,
    total: 100,
    unit: "kits",
    location: "Central Hospital",
    status: "In Progress",
    priority: "High",
    icon: Package,
  },
  {
    id: 2,
    name: "Emergency Vehicles",
    allocated: 12,
    total: 15,
    unit: "vehicles",
    location: "Response Station",
    status: "Completed",
    priority: "Medium",
    icon: Truck,
  },
  {
    id: 3,
    name: "Relief Workers",
    allocated: 45,
    total: 50,
    unit: "personnel",
    location: "Various Locations",
    status: "In Progress",
    priority: "High",
    icon: Users,
  },
];

export default function ResourceAllocation() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CardTitle>Resource Allocation</CardTitle>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button>New Allocation</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <resource.icon className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold">{resource.name}</span>
                      </div>
                      <Badge
                        variant={
                          resource.priority === "High" ? "destructive" : "secondary"
                        }
                      >
                        {resource.priority} Priority
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {resource.allocated}/{resource.total} {resource.unit}
                        </span>
                      </div>
                      <Progress
                        value={(resource.allocated / resource.total) * 100}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Location: </span>
                        <span className="font-medium">{resource.location}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status: </span>
                        <span className="font-medium">{resource.status}</span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Update Allocation</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}