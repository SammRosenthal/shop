"use client";

import type { Cart, User } from "./Navbar";

export function NavbarContent({ user, cart }: { user?: User; cart: Cart }) {
  return user ? <LoggedIn user={user} cart={cart} /> : <LoggedOut />;
}

function LoggedIn({ user, cart }: { user: User; cart: Cart }) {
  return (
    <div className="flex items-center justify-center gap-10 text-black">
      <div>{user.firstName}</div>

      <div className="flex h-full w-16 items-center justify-center">
        cart: {cart.totalQuantity}
      </div>

      <button
        className="rounded-full px-6 py-3 font-semibold no-underline transition"
        onClick={() => alert("sign out")}
      >
        Sign out
      </button>
    </div>
  );
}

function LoggedOut() {
  return <div>Logged out</div>;
}

export default NavbarContent;
