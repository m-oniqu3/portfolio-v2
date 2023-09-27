import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Wrapper from "@/components/layout/Wrapper";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Overview />
      <Header />
      <Wrapper />
    </Fragment>
  );
}
