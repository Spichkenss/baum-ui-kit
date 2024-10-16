import { useEffect, useRef } from "react";

export const useKeyDown = (
  key: string,
  callback: (event: KeyboardEvent) => void
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        callbackRef.current(event);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [key]);
};