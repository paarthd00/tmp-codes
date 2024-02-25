import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "@/components/header";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
export const Route = createRootRoute({
  component: () => {
    const { isAuthenticated, isLoading, login, logout } = useKindeAuth();
    if (isLoading) {
      return <p>Loading</p>;
    }
    return (<>
      {isAuthenticated ?
        <>
          <div className="pt-8 px-8 flex gap-2 justify-between w-[100%]">
            <Header />
            <div className="flex gap-2 items-center">
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>{" "}
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
              <button onClick={() => logout()} type="button">
                Sign Out
              </button>
            </div>
          </div>
          <hr />
          <Outlet />
        </>
        :
        <div className="pt-8 px-8">
          <p>Please sign in or register!</p>
          <button onClick={() => login()} type="button">
            Sign In Buddy
          </button>
        </div>
      }
    </>)
  }
});
