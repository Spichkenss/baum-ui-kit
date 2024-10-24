import { createPortal } from "react-dom";

interface PortalProps {
  element?: HTMLElement | null;
  children?: React.ReactNode;
}

export const Portal = ({
  children,
  element = document.body
}: PortalProps) => {
  return element
    ? createPortal(children, element)
    : null;
};
