import DashboardMetrics from "@/components/dashboard/metrics";
import WeatherMap from "@/components/dashboard/weather-map";
import SocialFeed from "@/components/dashboard/social-feed";
import RecentIncidents from "@/components/dashboard/recent-incidents";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherMap />
        <div className="space-y-6">
          <SocialFeed />
          <RecentIncidents />
        </div>
      </div>
    </div>
  );
}