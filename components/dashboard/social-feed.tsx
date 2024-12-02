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

const socialUpdates = [
  {
    id: 1,
    user: "Emergency Response",
    message: "Flash flood warning issued for downtown area. Please avoid low-lying areas.",
    time: "2 minutes ago",
    type: "warning",
  },
  {
    id: 2,
    user: "Weather Service",
    message: "Hurricane approaching eastern coast. Prepare for evacuation.",
    time: "5 minutes ago",
    type: "critical",
  },
  {
    id: 3,
    user: "City Updates",
    message: "Emergency shelters open at Community Center and High School.",
    time: "10 minutes ago",
    type: "info",
  },
  {
    id: 4,
    user: "Relief Team",
    message: "Distribution of emergency supplies starting at Main Street.",
    time: "15 minutes ago",
    type: "info",
  },
];

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "warning":
      return "warning";
    case "critical":
      return "destructive";
    default:
      return "secondary";
  }
};

export default function SocialFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Updates</CardTitle>
        <CardDescription>Real-time community reports and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {socialUpdates.map((update) => (
              <div
                key={update.id}
                className="flex flex-col space-y-2 border-b pb-4 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{update.user}</span>
                  <Badge variant={getBadgeVariant(update.type) as any}>
                    {update.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{update.message}</p>
                <span className="text-xs text-muted-foreground">
                  {update.time}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}