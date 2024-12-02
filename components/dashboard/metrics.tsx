"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, AlertCircle, Shield, Users } from "lucide-react";

const metrics = [
  {
    title: "Active Alerts",
    value: "12",
    description: "3 High Priority",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    title: "Resources Deployed",
    value: "847",
    description: "Across 6 Regions",
    icon: Shield,
    color: "text-blue-600",
  },
  {
    title: "Affected Areas",
    value: "23",
    description: "5 Critical Zones",
    icon: AlertCircle,
    color: "text-yellow-600",
  },
  {
    title: "Response Teams",
    value: "56",
    description: "12 On Standby",
    icon: Users,
    color: "text-green-600",
  },
];

export default function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}