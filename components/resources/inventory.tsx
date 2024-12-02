"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Shield, Truck } from "lucide-react";

const inventory = [
  {
    id: 1,
    name: "Emergency Medical Kits",
    quantity: 500,
    status: "In Stock",
    location: "Main Warehouse",
    lastUpdated: "2 hours ago",
    icon: Shield,
  },
  {
    id: 2,
    name: "Water Supplies",
    quantity: 1000,
    status: "Low Stock",
    location: "Distribution Center",
    lastUpdated: "1 hour ago",
    icon: Package,
  },
  {
    id: 3,
    name: "Emergency Vehicles",
    quantity: 25,
    status: "Available",
    location: "Central Station",
    lastUpdated: "30 minutes ago",
    icon: Truck,
  },
];

export default function ResourceInventory() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {inventory.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <item.icon className="h-5 w-5 text-blue-500" />
                {item.name}
              </CardTitle>
              <Badge variant={item.status === "Low Stock" ? "destructive" : "secondary"}>
                {item.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <span className="text-sm font-medium">{item.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="text-sm font-medium">{item.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <span className="text-sm font-medium">{item.lastUpdated}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="w-full" variant="outline" size="sm">
                  Update Stock
                </Button>
                <Button className="w-full" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}