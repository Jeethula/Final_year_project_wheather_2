"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveIncidents from "@/components/incidents/active";
import IncidentHistory from "@/components/incidents/history";
import IncidentReporting from "@/components/incidents/reporting";

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Incident Management</h1>
        <Button>Report New Incident</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Incidents</TabsTrigger>
          <TabsTrigger value="history">Incident History</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <ActiveIncidents />
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <IncidentHistory />
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <IncidentReporting />
        </TabsContent>
      </Tabs>
    </div>
  );
}