import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "./components/error-boundary";
import { URLs } from "./__data__/urls";
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/search";
import ProfileView from "./pages/dogsitter-viewing";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const ProtectedRoute = ({ children }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  if (!jwt) {
    return <Navigate to={URLs.baseUrl} />;
  }
  return children;
};

const UnprotectedRoute = ({ children }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  if (jwt) {
    return <Navigate to={URLs.ui.search} />;
  }
  return children;
};

/*const RoleProtectedRoute = ({ role, children }) => {
  const userRole = useSelector((s: RootState) => s.user.userRole);
  if (userRole === role) {
    return <Navigate to={URLs.ui.search} />;
  }
  return children;
};*/

const PageRoutes = () => (
  <ErrorBoundary>
    <Routes>
      <Route
        path={URLs.baseUrl}
        element={
          <UnprotectedRoute>
            <Login />
          </UnprotectedRoute>
        }
      />
      <Route
        path={URLs.ui.register}
        element={
          <UnprotectedRoute>
            <Register />
          </UnprotectedRoute>
        }
      />
      <Route
        path={URLs.ui.search}
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      />
      <Route
        path={URLs.ui.dogsitterViewing}
        element={
          <ProtectedRoute>
            <ProtectedRoute>
              <ProfileView />
            </ProtectedRoute>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </ErrorBoundary>
);

export { PageRoutes };
