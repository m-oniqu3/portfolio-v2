"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type Section = { id: number; name: string };

type SectionContext = {
  sections: Section[];
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
  maxSections: number;
  nextSection: () => void;
  prevSection: () => void;
  isContentVisible: boolean;
  setIsContentVisible: Dispatch<SetStateAction<boolean>>;
};

export const SectionContext = createContext<SectionContext | null>(null);

export default function SectionContextProvider(props: Props) {
  const { children } = props;

  const sections: Section[] = [
    { id: 0, name: "about" },
    { id: 1, name: "projects" },
    { id: 2, name: "skills" },
    { id: 3, name: "contact" },
  ];

  const [isContentVisible, setIsContentVisible] = useState(false);

  const [currentSection, setCurrentSection] = useState(0);
  const maxSections = sections.length - 1;

  function nextSection() {
    if (currentSection === maxSections) return;
    setCurrentSection((prev) => prev + 1);
  }

  function prevSection() {
    if (currentSection <= 0) return;
    setCurrentSection((prev) => prev - 1);
  }

  const values = {
    sections,
    currentSection,
    setCurrentSection,
    maxSections,
    nextSection,
    prevSection,
    isContentVisible,
    setIsContentVisible,
  };

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
