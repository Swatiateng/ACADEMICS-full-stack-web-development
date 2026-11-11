import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/tasks/:taskId"
          element={<TaskDetails />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </>

  );

}

export default App;