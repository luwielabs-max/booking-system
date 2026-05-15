import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

import DashboardLayout from "../layouts/DashboardLayout";

import OverviewPage from "../pages/dashboard/OverviewPage";
import BookingsPage from "../pages/dashboard/BookingsPage";
import ServicesPage from "../pages/dashboard/ServicesPage";
import SettingsPage from "../pages/dashboard/SettingsPage";
import PublicBookingPage from "../pages/Booking/PublicBookingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route path="/book/:businessId" element={<PublicBookingPage />} />
        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          <Route
            index
            element={<OverviewPage />}
          />

          <Route
            path="bookings"
            element={<BookingsPage />}
          />

          <Route
            path="services"
            element={<ServicesPage />}
          />

          <Route
            path="settings"
            element={<SettingsPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;