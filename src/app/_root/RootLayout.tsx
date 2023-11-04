import { Outlet, Navigate } from "react-router-dom";

import { Topbar, Bottombar, LeftSidebar } from "@/components/shared";
import { useUserContext } from "@/context/AuthContext";

const RootLayout = () => {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) return <Navigate to="/sign-in" />;

  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
