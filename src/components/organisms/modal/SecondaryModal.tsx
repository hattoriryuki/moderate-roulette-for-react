import { FC, memo, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "30%",
    borderRadius: "8px",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

export const SecondaryModal: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => setIsOpen(false);

  Modal.setAppElement("body");
  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <div>
        <header className="h-12 px-4 py-2 bg-[#3CC1EB] text-white text-2xl font-black">
          Moderate Roulletへようこそ !
        </header>
        <div className="flex items-center p-4 text-gray-700 font-semibold">
          <ul>
            <li className="mb-2">日常のちょっとした迷いをルーレットで手軽に解決できるサービスです</li>
            <li className="mb-2">使い方はとてもシンプルで、ユーザー登録も必要ありません</li>
            <li className="mb-2">PCでもスマホでもご使用いただけます</li>
          </ul>
        </div>
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
