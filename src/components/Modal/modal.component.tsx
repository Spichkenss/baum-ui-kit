import { ClickableOutside } from "@components/ClickableOutside";
import { Portal } from "@components/Portal";
import { useControllableState } from "@hooks/useControllableState";

import styles from "./modal.module.scss";
import { useKeyDown } from "@hooks/useKeyDown";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  children
}: ModalProps) => {
  useKeyDown("Escape", onClose);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles["Modal__Root"]}>
        <ClickableOutside onClickOutside={onClose}>
          <div
            className={styles["Modal__Content-Panel"]}
          >
            {children}
          </div>
        </ClickableOutside>
      </div>
    </Portal>
  );
}