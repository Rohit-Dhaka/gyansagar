import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-[100svh] flex-col">
        <Navbar />
        <main className="flex min-h-0 flex-1 flex-col">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
