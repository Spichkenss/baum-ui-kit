import { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { useBoolean } from "@hooks/useBoolean";

import { Modal, ModalProps } from "./modal.component";
import { Button } from "@components/Button";

const meta = {
  title: "Modals & Popups/Modal",
  component: Modal,
  tags: ["autodocs"]
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = ({
  isOpen,
  onClose,
  children
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useBoolean(isOpen);

  const handleClose = () => {
    setIsModalOpen.setFalse();
    onClose();
  }

  return (
    <Fragment>
      <Button onClick={setIsModalOpen.setTrue}>
        Открыть модальное окно
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        {children}
      </Modal>
    </Fragment>
  )
}

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => console.log("Closed"),
    children: <div>Контент модального окна</div>
  },
  render: Template
}