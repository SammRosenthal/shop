'use client';

import Image from "next/image";
import Logo from '../../public/logo.svg';

export function Navbar() {
  return (
    <nav className="h-14 w-full self-start border-[0] border-b border-solid border-black md:h-16">
      <div className="container mx-auto flex h-full justify-between">
        <Image src={Logo as string} alt="logo" width={80} height={80} />
        <div className="flex items-center justify-center gap-10 text-black">
          {true && (
            <div className="flex h-full w-16 items-center justify-center border">
              cart
            </div>
          )}

          <button
            className="rounded-full px-6 py-3 font-semibold no-underline transition"
            onClick={console.warn}
          >
            {true ? "Sign out" : "Sign in"}
          </button>
          <div>test</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
