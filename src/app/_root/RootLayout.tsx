import { Outlet } from "react-router-dom";

import { Topbar, Bottombar, LeftSidebar } from "@/components/shared";

const RootLayout = () => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <div className="w-full md:flex">
        <Topbar />
        <LeftSidebar />

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>

        <Bottombar />
      </div>
    </main>
  );
};

export default RootLayout;
