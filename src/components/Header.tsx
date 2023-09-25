"use client";

import { satoshiBlack } from "@/components/utils/font";
import { useSectionContext } from "@/context/context";

const Header = () => {
  const { sections, currentSection } = useSectionContext();

  const renderSections = sections.map((section, index) => {
    const { id, name } = section;

    return (
      <article
        id={`${id}`}
        key={id}
        style={{
          transform: `translateX(${(index - currentSection) * 100}%)`,
        }}
        className={`${satoshiBlack.className} absolute top-0 h-56 w-screen text-7xl transition duration-500 `}
      >
        <h1 className="absolute top-5 text-8xl w-screen -z-10 grid place-items-center">
          <span className="stroked tracking-widest w-fit">#{name}</span>
        </h1>
        <h1 className={`grid place-items-center h-full text-secondary`}>
          {name}
        </h1>
      </article>
    );
  });

  return (
    <header className="h-56 w-screen relative flex overflow-hidden">
      {renderSections}
    </header>
  );
};

export default Header;
