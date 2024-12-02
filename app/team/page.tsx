"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMembers from "@/components/team/members";
import TeamSchedule from "@/components/team/schedule";
import TeamPerformance from "@/components/team/performance";

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Team Management</h1>
        <Button>Add Team Member</Button>
      </div>

      <Tabs defaultValue="members" className="space-y-6">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-6">
          <TeamMembers />
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <TeamSchedule />
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <TeamPerformance />
        </TabsContent>
      </Tabs>
    </div>
  );
}