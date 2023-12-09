import { FC, ReactNode, memo, useCallback, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "80%",
    borderRadius: "8px",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

type Props = {
  children: ReactNode;
  title: string;
  flag: boolean;
  onClose: () => void;
  height: string;
};

export const PrimaryModal: FC<Props> = memo((props) => {
  const { children, title, flag, onClose, height } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery();

  useEffect(() => {
    if (isDesktop) {
      customStyles.content.width = "60%";
    }
  }, []);

  useEffect(() => {
    setIsOpen(flag);
    customStyles.content.height = height;
  }, [flag]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [isOpen]);

  Modal.setAppElement("body");

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="h-[100%]">
        <header className="flex py-4 px-6">
          <p className="text-2xl text-[#0a2463] font-semibold">{title}</p>
          <button
            className="text-gray-500 text-xl ml-auto"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        <div className="overflow-y-scroll max-h-[calc(100%-8.5rem)] py-2 px-6 ml-4">
          {children}
        </div>
        <footer className="flex justify-end items-center py-4 px-6">
          <button
            className="px-4 bg-[#EDF2F7] leading-10 rounded-md hover:bg-[#E2E8F0] active:bg-[#CBD5E0]"
            onClick={closeModal}
          >
            Close
          </button>
        </footer>
      </div>
    </Modal>
  );
});
