import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import ListPage from "../pages/List";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
}

export default AppRoutes;
