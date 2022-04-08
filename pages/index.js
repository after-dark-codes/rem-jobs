import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rem Jobs</title>
      </Head>
      <Header />

      <Search />

      <JobList />

      <Footer />
    </>
  );
}
