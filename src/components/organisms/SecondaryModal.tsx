import { FC, ReactNode, memo, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "80%",
    borderRadius: "8px",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

type Props = {
  children: ReactNode;
  flag: boolean;
  onClose: () => void;
};

export const SecondaryModal: FC<Props> = memo((props) => {
  const { children, flag, onClose } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(flag);
  }, [flag]);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  Modal.setAppElement("body");

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div>
        <header className="flex py-4 px-6">
          <p className="text-2xl text-[#0a2463] font-semibold">利用規約</p>
          <button
            className="text-gray-500 text-xl ml-auto"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        <div className="overflow-y-scroll max-h-[460px] py-2 px-6 ml-4">
          {children}
        </div>
        <footer className="fixed bottom-0 right-0 py-4 px-6">
          <button
            className="px-4 bg-[#EDF2F7] leading-10 rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </footer>
      </div>
    </Modal>
  );
});
