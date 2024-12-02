"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DisasterMap from "@/components/maps/disaster-map";
import ResourceMap from "@/components/maps/resource-map";
import AnalyticsView from "@/components/maps/analytics";

export default function MapsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Maps & Analysis</h1>
      </div>

      <Tabs defaultValue="disasters" className="space-y-6">
        <TabsList>
          <TabsTrigger value="disasters">Disaster Zones</TabsTrigger>
          <TabsTrigger value="resources">Resource Distribution</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="disasters" className="space-y-6">
          <DisasterMap />
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <ResourceMap />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <AnalyticsView />
        </TabsContent>
      </Tabs>
    </div>
  );
}