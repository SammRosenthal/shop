import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export function NavBar() {
  const { data: sessionData } = useSession();

  return (
    <nav className="w-full self-start md:h-16 h-14 border-black border">
      <div className="container flex justify-between h-full mx-auto">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
        <div className="text-black flex justify-center items-center gap-10">
          {sessionData && (
            <div className="border h-full flex justify-center items-center w-16">cart</div>
          )}

          <button
            className="rounded-full px-6 py-3 font-semibold no-underline transition"
            onClick={sessionData ? () => void signOut() : () => void signIn("google")}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
