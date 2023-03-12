import { User, useUserApi } from "../hooks/api/use-user-api/useUserApi";
import { Avatar } from "./common/Avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./common/Tooltip";

export function Navbar() {
  return (
    <nav className="w-full flex justify-center h-16">
      <div className="container flex justify-between w-full px-6">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-medium">
            The Shop
          </a>
        </div>

        <UserSection />
      </div>
    </nav>
  );
}

function UserSection() {
  const { userQuery } = useUserApi();

  // should try to make a nice skeleton for this
  if (!userQuery.isFetchedAfterMount) {
    return <div className="flex items-center h-16">Loading...</div>;
  }

  return (
    <div className="flex gap-x-8 my-auto">
      {userQuery.data && Object.entries(userQuery.data || {}).length ? (
        <LoggedIn user={userQuery.data} />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
}

function LoggedIn({ user }: { user: User }) {
  const { logoutMutation } = useUserApi();

  return (
    <>
      <Avatar src={"/public/logo.svg"} circle={false} />

      <Tooltip>
        <TooltipTrigger>
          <Avatar
            src={user.avatar}
            fallback={
              user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
            }
          />
        </TooltipTrigger>

        <TooltipContent>
          <button
            className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-32"
            onClick={() => logoutMutation.mutate()}
          >
            Logout
          </button>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

function LoggedOut() {
  const { loginMutation } = useUserApi();
  return <button onClick={() => loginMutation.mutate()}>Login</button>;
}
