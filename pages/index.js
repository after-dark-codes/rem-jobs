import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";

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
