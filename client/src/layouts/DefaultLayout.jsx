import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main style={{ flexGrow: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
