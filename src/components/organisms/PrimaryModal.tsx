import { FC, memo, useEffect, useState } from "react";
import Modal from "react-modal";

type Props = {
  flag: boolean;
};

export const PrimaryModal: FC<Props> = memo((props) => {
  const { flag } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(flag);
  }, [flag]);

  const closeModal = () => {
    setIsOpen(false);
  };
  Modal.setAppElement("body");
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div>
        <p>Modal Content</p>
        <button onClick={closeModal}>close</button>
      </div>
    </Modal>
  );
});
