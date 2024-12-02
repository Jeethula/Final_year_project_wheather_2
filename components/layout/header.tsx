"use client";

import { Bell, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { setTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="flex items-center gap-4 px-4 h-16">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </Button>
        <div className="flex-1 md:hidden">
          <span className="font-bold text-xl">DisasterWatch</span>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-6 h-6" />
            <span className="top-0 right-0 absolute bg-red-600 rounded-full w-2 h-2" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="w-6 h-6 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-6 h-6 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
