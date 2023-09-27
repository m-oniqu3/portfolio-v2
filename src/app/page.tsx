"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import { Fragment } from "react";

export default function Home() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log(entry);
  //           setIsContentVisible(true);
  //         } else {
  //           setIsContentVisible(false);
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       threshold: 0.9,
  //       rootMargin: "0px",
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // }, [ref, setIsContentVisible]);

  return (
    <Fragment>
      <Navbar />

      <Overview />
      <main>
        <Header />

        <Content />
      </main>
    </Fragment>
  );
}
