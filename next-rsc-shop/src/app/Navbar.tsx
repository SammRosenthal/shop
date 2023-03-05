import Image from "next/image";
import Logo from "../../public/logo.svg";

import { NavbarContent } from "./NavbarContent";
import type { Product } from "./shop/page";

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// maybe something nice than throwing errors here so the navbar could still render?
export async function getMySession() {
  const userRes = await fetch('https://dummyjson.com/users/1');

  if (!userRes.ok) {
    throw new Error('Failed to fetch user');
  }

  const user = await userRes.json() as User;

  const cartRes = await fetch(`https://dummyjson.com/carts/${user.id}`);

  if (!cartRes.ok) {
    throw new Error('Failed to fetch cart');
  }

  const cart = await cartRes.json() as Cart;

  return { user, cart };
}

export async function Navbar() {
  const session = await getMySession();

  return (
    <nav className="h-14 w-full self-start border-[0] border-b border-solid border-black md:h-16">
      <div className="container mx-auto flex h-full justify-between">
        <Image src={Logo as string} alt="logo" width={80} height={80} />
        <NavbarContent user={session.user} cart={session.cart} />
      </div>
    </nav>
  );
}

export default Navbar;
