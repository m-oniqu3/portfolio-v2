"use client";

import { createContext, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

type Section = { id: number; name: string };

type SectionContext = {
  sections: Section[];
};

export const SectionContext = createContext<SectionContext | null>(null);

export default function SectionContextProvider(props: Props) {
  const { children } = props;
  const sections: Section[] = [
    { id: 0, name: "intro" },
    { id: 1, name: "about" },
    { id: 2, name: "projects" },
    { id: 3, name: "skills" },
    { id: 4, name: "contact" },
  ];

  const values = { sections };

  return (
    <SectionContext.Provider value={values}>{children}</SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === null) {
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider"
    );
  }
  return context;
}
