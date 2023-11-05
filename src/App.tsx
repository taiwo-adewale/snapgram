import { Routes, Route } from "react-router-dom";

import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
  PageNotFound,
} from "@/app/_root/pages";
import AuthLayout from "@/app/_auth/AuthLayout";
import RootLayout from "@/app/_root/RootLayout";
import SignupForm from "@/app/_auth/forms/SignupForm";
import SigninForm from "@/app/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "@/globals.css";

const App = () => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
