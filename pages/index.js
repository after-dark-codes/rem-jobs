import Head from "next/head";
import Header from "./header";
import Search from "./search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rem Jobs</title>
      </Head>
      <Header />

      <Search />
    </>
  );
}
