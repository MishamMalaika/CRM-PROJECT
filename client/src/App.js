import AddUser from "./adduser/AddUser";
import "./App.css";
import User from "./getuser/User";
import Update from "./updateuser/Update";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <User />
        </PrivateRoute>
      ),
    },
    {
      path: "/add",
      element: (
        <PrivateRoute>
          <AddUser />
        </PrivateRoute>
      ),
    },
    {
      path: "/update/:id",
      element: (
        <PrivateRoute>
          <Update />
        </PrivateRoute>
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
