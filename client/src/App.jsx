import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {

  const token =
    localStorage.getItem("token");

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            token
              ? <Navigate to="/dashboard" />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/dashboard" />
              : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            token
              ? <Navigate to="/dashboard" />
              : <Signup />
          }
        />

        <Route
          path="/dashboard"
          element={
            token
              ? <Dashboard />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/profile"
          element={
            token
              ? <Profile />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;