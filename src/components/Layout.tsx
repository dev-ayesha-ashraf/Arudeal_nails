// components/Layout.tsx
import Navbar from "./Navbar";
import Footer from "../features/Landing/Foote";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
