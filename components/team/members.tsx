"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Phone, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Emergency Response Lead",
    status: "On Duty",
    location: "Central Command",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "sarah.j@example.com",
    },
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Medical Coordinator",
    status: "Available",
    location: "Field Unit 3",
    contact: {
      phone: "+1 (555) 234-5678",
      email: "michael.c@example.com",
    },
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Logistics Specialist",
    status: "Off Duty",
    location: "Distribution Center",
    contact: {
      phone: "+1 (555) 345-6789",
      email: "emma.r@example.com",
    },
    avatar: "ER",
  },
];

export default function TeamMembers() {
  return (
    <div className="grid gap-6">
      {teamMembers.map((member) => (
        <Card key={member.id}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>{member.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge
                    // variant={
                    //   member.status === "On Duty"
                    //     ? "success"
                    //     : member.status === "Available"
                    //     ? "secondary"
                    //     : "outline"
                    // }
                  >
                    {member.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{member.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{member.contact.email}</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button size="sm">Assign Task</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}