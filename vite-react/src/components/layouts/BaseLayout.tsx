import { Navbar } from "../Navbar";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center bg-zinc-300">
      <Navbar />
      <main className="container bg-white grow">{children}</main>
    </div>
  );
}
