import { useNavigate } from "react-router-dom";

import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import { Button } from "../ui";

const Signout = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <>
      <button
        onClick={(e) => handleSignOut(e)}
        className="hidden md:flex gap-4 items-center p-4 w-full"
      >
        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className="group-hover:invert-white"
        />
        <span>Logout</span>
      </button>

      <Button
        variant="ghost"
        className="shad-button_ghost md:!hidden"
        onClick={(e) => handleSignOut(e)}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
      </Button>
    </>
  );
};

export default Signout;
