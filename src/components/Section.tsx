"use client";
import { useSectionContext } from "@/context/context";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  id: number;
}

const Section = (props: Props) => {
  const { children, id } = props;
  const { setCurrentSection } = useSectionContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, id, setCurrentSection]);

  return (
    <section
      ref={ref}
      id={String(id)}
      className="h-full grid place-items-center"
    >
      {children}
    </section>
  );
};

export default Section;
