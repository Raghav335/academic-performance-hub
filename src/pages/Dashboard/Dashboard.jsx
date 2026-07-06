import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import StatsCards from "./StatsCards";
import QuickActions from "./QuickActions";
import PerformanceChart from "./PerformanceChart";
import AIInsights from "./AIInsights";
import RecentActivity from "./RecentActivity";

import { auth } from "../../firebase/firebaseConfig";

function Dashboard() {
  const user = auth.currentUser;

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#ai-insights") {
      document
        .getElementById("ai-insights")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  }, [location]);

  const hour = new Date().getHours();

  let greeting = "Welcome Back";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            {greeting}
            {user?.displayName ? `, ${user.displayName}` : ""} 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Track your academic progress and improve your performance.
          </p>

          <p className="text-slate-500 mt-2 text-sm">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

        </div>

        <StatsCards />

        <QuickActions />

        <PerformanceChart />

        <div id="ai-insights">
          <AIInsights />
        </div>

        <RecentActivity />

      </div>

    </div>
  );
}

export default Dashboard;