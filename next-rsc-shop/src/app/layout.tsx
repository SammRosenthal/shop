import Navbar from "./Navbar";

import "~/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My RSC & Next Shop</title>
        <meta name="description" content="A shop written with Next and RSC" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
