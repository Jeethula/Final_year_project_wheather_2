"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Bell, Info, Shield } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Emergency Alert",
    message: "Flash flood warning issued for downtown area",
    type: "emergency",
    time: "5 minutes ago",
    read: false,
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: "Resource Update",
    message: "Medical supplies restocked at Central Hospital",
    type: "update",
    time: "30 minutes ago",
    read: false,
    icon: Shield,
  },
  {
    id: 3,
    title: "System Notice",
    message: "Scheduled maintenance in 2 hours",
    type: "info",
    time: "1 hour ago",
    read: true,
    icon: Info,
  },
];

const getNotificationStyle = (type: string) => {
  switch (type) {
    case "emergency":
      return {
        icon: AlertTriangle,
        color: "text-red-500",
        badge: "destructive",
      };
    case "update":
      return {
        icon: Shield,
        color: "text-blue-500",
        badge: "secondary",
      };
    default:
      return {
        icon: Info,
        color: "text-gray-500",
        badge: "outline",
      };
  }
};

export default function NotificationsList() {
  return (
    <Card>
      <CardContent className="p-6">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => {
              const style = getNotificationStyle(notification.type);
              return (
                <Card
                  key={notification.id}
                  className={`border-l-4 ${
                    notification.read ? "border-l-gray-200" : "border-l-blue-500"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`rounded-full p-2 ${
                          notification.read ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        <notification.icon
                          className={`h-4 w-4 ${style.color}`}
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{notification.title}</p>
                          <Badge variant={style.badge as any}>
                            {notification.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          {!notification.read && (
                            <Button variant="ghost" size="sm">
                              Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}