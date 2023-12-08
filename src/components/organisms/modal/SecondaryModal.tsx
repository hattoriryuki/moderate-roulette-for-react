import { FC, ReactNode, memo, useCallback, useEffect, useState } from "react";
import Modal from "react-modal";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "35%",
    borderRadius: "8px",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

type Props = {
  title: string;
  children: ReactNode;
};

export const SecondaryModal: FC<Props> = memo((props) => {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery();

  useEffect(() => {
    if (isDesktop) {
      customStyles.content.width = "40%";
      customStyles.content.height = "30%";
    }
    window.onload = () => setIsOpen(true);
  }, [isDesktop]);

  const onCloseModal = useCallback(() => setIsOpen(false), []);

  Modal.setAppElement("body");
  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <div>
        <header className="h-12 px-4 py-2 bg-[#3CC1EB] text-white text-2xl font-black">
          {title}
        </header>
        {children}
        <footer className="flex justify-end absolute bottom-0 right-0 items-center py-4 px-6">
          <button
            className="px-4 bg-[#EDF2F7] text-[#3CC1EB] leading-10 rounded-md hover:bg-[#E2E8F0] active:bg-[#CBD5E0]"
            onClick={onCloseModal}
          >
            Start
          </button>
        </footer>
      </div>
    </Modal>
  );
});
