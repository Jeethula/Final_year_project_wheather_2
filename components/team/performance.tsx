"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performanceData = [
  { month: "Jan", responseTime: 15, incidents: 45 },
  { month: "Feb", responseTime: 12, incidents: 52 },
  { month: "Mar", responseTime: 18, incidents: 38 },
  { month: "Apr", responseTime: 14, incidents: 65 },
  { month: "May", responseTime: 10, incidents: 48 },
  { month: "Jun", responseTime: 13, incidents: 55 },
];

const teamMetrics = [
  {
    name: "Emergency Response Team",
    avgResponse: "12 mins",
    incidents: 156,
    success: "94%",
  },
  {
    name: "Medical Support Team",
    avgResponse: "15 mins",
    incidents: 98,
    success: "91%",
  },
  {
    name: "Logistics Team",
    avgResponse: "20 mins",
    incidents: 124,
    success: "88%",
  },
];

export default function TeamPerformance() {
  return (
    <div className="gap-6 grid">
      <div className="gap-6 grid md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Response Time Trends</CardTitle>
              <Badge variant="secondary">Last 6 Months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="responseTime"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Incidents Handled</CardTitle>
              <Badge variant="secondary">Last 6 Months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="incidents" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="gap-6 grid md:grid-cols-3">
            {teamMetrics.map((team, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">{team.name}</h3>
                    <div className="gap-4 grid grid-cols-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg Response Time</p>
                        <p className="font-medium">{team.avgResponse}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Incidents Handled</p>
                        <p className="font-medium">{team.incidents}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Success Rate</p>
                        <p className="font-medium">{team.success}</p>
                      </div>
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
