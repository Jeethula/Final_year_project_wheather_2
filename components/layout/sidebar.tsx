"use client";

import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Home,
  LayoutDashboard,
  Map,
  MessageSquare,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Weather Alerts",
    icon: AlertTriangle,
    href: "/weather",
    color: "text-violet-500",
  },
  {
    label: "Resource Management",
    icon: BarChart3,
    href: "/resources",
    color: "text-pink-700",
  },
  {
    label: "Incident Reports",
    icon: MessageSquare,
    href: "/incidents",
    color: "text-orange-700",
  },
  {
    label: "Maps & Analysis",
    icon: Map,
    href: "/maps",
    color: "text-emerald-500",
  },
  {
    label: "Team Management",
    icon: Users,
    href: "/team",
    color: "text-green-700",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
    color: "text-red-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 dark:bg-gray-900 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center md:hidden p-4">
          <span className="font-bold text-2xl">DisasterWatch</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 py-4 h-full text-gray-800 dark:text-white">
          <div className="flex-1 px-3 py-2">
            <Link href="/" className="flex items-center mb-14 pl-3">
              <Home className="w-8 h-8 text-blue-600" />
              <span className="ml-2 font-bold text-2xl">DisasterWatch</span>
            </Link>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-blue-600 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition",
                    pathname === route.href
                      ? "text-blue-600 bg-gray-200/50 dark:bg-gray-800/50"
                      : "text-gray-600 dark:text-gray-400"
                  )}
                  onClick={onClose}
                >
                  <div className="flex flex-1 items-center">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
