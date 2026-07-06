import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home/Home";

// Authentication
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Calculator
import Calculator from "./pages/Calculator/Calculator";

// History
import History from "./pages/History/History";

import AIInsightsPage from "./pages/AIInsights/AIInsightsPage";

// Profile
import Profile from "./pages/Profile/Profile";

// Settings
import Settings from "./pages/Settings/Settings";


// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Calculator */}
        <Route
          path="/calculator"
          element={
            <ProtectedRoute>
              <Calculator />
            </ProtectedRoute>
          }
        />

        {/* History */}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
<Route
  path="/insights"
  element={
    <ProtectedRoute>
      <AIInsightsPage />
    </ProtectedRoute>
  }
/>
       

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;