import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AppLayout from "@components/layout/AppLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Route>
    </Routes>
  );
}
