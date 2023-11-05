import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <main className="grid xl:grid-cols-2 min-h-screen">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <div
            style={{ backgroundImage: `url("/assets/images/side-img.svg")` }}
            className="hidden xl:block bg-cover bg-no-repeat w-full"
          ></div>
        </main>
      )}
    </>
  );
}
