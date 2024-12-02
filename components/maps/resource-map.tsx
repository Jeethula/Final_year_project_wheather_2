"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Shield, Truck } from "lucide-react";

const resources = [
  {
    id: 1,
    type: "Medical Supplies",
    location: "Central Hospital",
    status: "Well Stocked",
    quantity: "5,000 units",
    icon: Shield,
  },
  {
    id: 2,
    type: "Food & Water",
    location: "Distribution Center A",
    status: "Low Stock",
    quantity: "1,200 units",
    icon: Package,
  },
  {
    id: 3,
    type: "Emergency Vehicles",
    location: "Response Station B",
    status: "Available",
    quantity: "25 units",
    icon: Truck,
  },
];

export default function ResourceMap() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Resource Distribution Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-muted-foreground">Resource Distribution Map</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <resource.icon className="h-5 w-5 text-blue-500" />
                  {resource.type}
                </CardTitle>
                <Badge
                  variant={
                    resource.status === "Low Stock" ? "destructive" : "secondary"
                  }
                >
                  {resource.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="text-sm font-medium">{resource.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <span className="text-sm font-medium">{resource.quantity}</span>
                </div>
                <Button className="w-full mt-2" variant="outline" size="sm">
                  Manage Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}