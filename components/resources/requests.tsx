"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package, MapPin } from "lucide-react";

export default function ResourceRequests() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Request Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resource-type">Resource Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select resource type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical">Medical Supplies</SelectItem>
                  <SelectItem value="food">Food & Water</SelectItem>
                  <SelectItem value="shelter">Shelter</SelectItem>
                  <SelectItem value="transport">Transportation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity Required</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="Enter quantity needed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery-location">Delivery Location</Label>
              <div className="flex gap-2">
                <Input id="delivery-location" placeholder="Enter location" />
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Additional Details</Label>
              <Textarea
                id="details"
                placeholder="Provide any specific requirements or details"
                rows={4}
              />
            </div>

            <Button className="w-full">Submit Request</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                type: "Medical Supplies",
                quantity: "500 units",
                priority: "High",
                status: "Pending",
                location: "Central Hospital",
              },
              {
                id: 2,
                type: "Food & Water",
                quantity: "1000 units",
                priority: "Medium",
                status: "Approved",
                location: "Shelter Camp A",
              },
              {
                id: 3,
                type: "Transportation",
                quantity: "5 vehicles",
                priority: "Critical",
                status: "In Progress",
                location: "Evacuation Zone B",
              },
            ].map((request) => (
              <Card key={request.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold">{request.type}</span>
                      </div>
                      <Badge
                        // variant={
                        //   request.priority === "Critical"
                        //     ? "destructive"
                        //     : request.priority === "High"
                        //     ? "warning"
                        //     : "secondary"
                        // }
                      >
                        {request.priority}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Quantity: </span>
                        <span className="font-medium">{request.quantity}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status: </span>
                        <span className="font-medium">{request.status}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Location: </span>
                        <span className="font-medium">{request.location}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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