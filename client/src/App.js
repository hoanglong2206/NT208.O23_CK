import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelDetail from "./pages/HotelDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "./context/slices/auth";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const checkTokenExpired = () => {
      const cookieExpire = user.timeExpire;
      const currentTime = new Date().getTime();

      if (user.timeExpire && cookieExpire - currentTime <= 0) {
        dispatch(logout());
        window.location.reload();
      }
    };
    const interval = setInterval(checkTokenExpired, 1000);
    return () => clearInterval(interval);
  }, [user, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/tours" element={<Hotel />} />
        <Route path="/tours/:id" element={<HotelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
