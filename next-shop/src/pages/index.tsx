import { type NextPage } from "next";
import Head from "next/head";

import NavBar from "~/components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="A shop written with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <NavBar />
      </main>
    </>
  );
};

export default Home;


