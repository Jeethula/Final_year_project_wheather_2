"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceInventory from "@/components/resources/inventory";
import ResourceAllocation from "@/components/resources/allocation";
import ResourceRequests from "@/components/resources/requests";

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resource Management</h1>
        <Button>Request Resources</Button>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          <ResourceInventory />
        </TabsContent>

        <TabsContent value="allocation" className="space-y-6">
          <ResourceAllocation />
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <ResourceRequests />
        </TabsContent>
      </Tabs>
    </div>
  );
}