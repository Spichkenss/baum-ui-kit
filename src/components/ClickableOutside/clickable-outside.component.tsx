import { useEffect, useRef } from "react";
import { Slot } from "@components/Slot";

type ClickableOutsideProps = {
  children?: React.ReactNode;
  onClickOutside: () => void;
}

export const ClickableOutside = ({
  children,
  onClickOutside
}: ClickableOutsideProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.stopPropagation();

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <Slot ref={ref}>
      {children}
    </Slot>
  );
}