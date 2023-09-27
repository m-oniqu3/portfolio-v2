"use client";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Container from "@/components/ui/Container";
import { useSectionContext } from "@/context/context";

import { useEffect, useRef } from "react";

const Content = () => {
  const { isContentVisible, setIsContentVisible } = useSectionContext();
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            setIsContentVisible(true);
          } else {
            setIsContentVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, setIsContentVisible]);

  return (
    <div
      ref={ref}
      className={`${isContentVisible ? " overflow-y-scroll " : ""}`}
    >
      <Container className=" h-[80vh] pt-8 ">
        <About />
        <Skills />
      </Container>
    </div>
  );
};

export default Content;
