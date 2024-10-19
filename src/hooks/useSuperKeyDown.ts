import { useEffect } from "react";

import type { KeyboardKey } from "@global-types";

type KeyMap = {
  [keys in KeyboardKey]: (event: KeyboardEvent) => void;
}

export const useSuperKeyDown = (keyMap: Partial<KeyMap>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!keyMap || Object.keys(keyMap).length === 0) return;

      for (const key of Object.keys(keyMap)) {
        const castedKey = key as unknown as keyof KeyMap;
        if (castedKey === event.key) {
          keyMap[castedKey]?.(event);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [keyMap]);
}