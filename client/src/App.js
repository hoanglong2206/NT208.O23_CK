import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelDetail from "./pages/HotelDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
