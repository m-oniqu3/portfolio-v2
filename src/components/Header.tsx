"use client";

import Container from "@/components/ui/Container";
import { satoshiBlack } from "@/components/utils/font";
import { useSectionContext } from "@/context/context";
import { useRef } from "react";

const Header = () => {
  const { sections, currentSection, isContentVisible } = useSectionContext();
  const ref = useRef<HTMLElement>(null);

  console.log(isContentVisible);

  const renderSections = sections.map((section, index) => {
    const { id, name } = section;

    return (
      <article
        id={`${id}`}
        key={id}
        style={{
          transform: `translateX(${(index - currentSection) * 100}%)`,
        }}
        className={`${satoshiBlack.className} absolute top-0 h-full w-screen text-5xl transition duration-500 md:text-8xl`}
      >
        <h1 className="absolute top-5 text-8xl w-screen -z-10 flex items-center justify-start md:text-[10rem]">
          <span className="stroked tracking-widest w-fit">{name}</span>
        </h1>

        <h1
          className={`flex items-center justify-start relative top-4 h-full text-secondary`}
        >
          {name}
        </h1>
      </article>
    );
  });

  return (
    <header
      ref={ref}
      className={`h-[20vh] w-screen relative flex overflow-hidden
      `}
    >
      <Container>{renderSections}</Container>
    </header>
  );
};

export default Header;
