import { BrowserRouter, Routes, Route } from "react-router-dom";

import DesignSystemPage from "../pages/DesignSystemPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/design-system"
          element={<DesignSystemPage />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;