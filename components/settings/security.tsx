"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, Smartphone, Key } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Password Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
          <Button className="w-full">Update Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <Label>Two-Factor Authentication</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch />
          </div>
          <Button variant="outline" className="w-full">
            Set Up 2FA
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Log</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                event: "Password Changed",
                date: "March 16, 2024",
                location: "New York, USA",
                device: "Chrome on Windows",
              },
              {
                event: "Login Attempt",
                date: "March 15, 2024",
                location: "Los Angeles, USA",
                device: "Safari on iPhone",
              },
              {
                event: "2FA Enabled",
                date: "March 14, 2024",
                location: "Chicago, USA",
                device: "Firefox on MacOS",
              },
            ].map((log, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{log.event}</p>
                  <p className="text-sm text-muted-foreground">{log.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{log.date}</p>
                  <p className="text-sm text-muted-foreground">{log.device}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">
            View Full Security Log
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}