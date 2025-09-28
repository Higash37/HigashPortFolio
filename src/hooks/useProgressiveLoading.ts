import { useState, useEffect } from "react";
import type { LoadedSections } from "../types/ui";

/**
 * プログレッシブローディング管理フック
 */
export const useProgressiveLoading = () => {
  const [loadedSections, setLoadedSections] = useState<LoadedSections>({
    header: false,
    story: false,
    philosophy: false,
    projects: false,
    skills: false,
    about: false,
    footer: false,
  });

  useEffect(() => {
    const loadSections = async () => {
      const sections: (keyof LoadedSections)[] = [
        "header",
        "story",
        "philosophy",
        "projects",
        "skills",
        "about",
        "footer",
      ];

      const delays = [500, 400, 400, 400, 300, 300, 200];

      for (let i = 0; i < sections.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delays[i]));
        setLoadedSections((prev) => ({ ...prev, [sections[i]]: true }));
      }
    };

    loadSections();
  }, []);

  const isAllLoaded = Object.values(loadedSections).every(Boolean);

  return {
    loadedSections,
    isAllLoaded,
  };
};
