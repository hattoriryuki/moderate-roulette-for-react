import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from "react";

import { SecondaryModal } from "./SecondaryModal";
import { TermsContent } from "../molucules/TermsContent";
import { PrivacyContent } from "../molucules/PrivacyContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const HamburgerMenu: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const [termsIsOpen, setTermsIsOpen] = useState(false);
  const [privacyIsOpen, setPrivacyIsOpen] = useState(false);

  const onClickOpenModal = useCallback(
    (flag: number) => {
      const { isOpen, func } = chooseModal(flag);
      func(!isOpen);
      onClose();
    },
    [isOpen]
  );

  const onCloseModal = useCallback((flag: number) => {
    const { func } = chooseModal(flag);
    func(false);
  }, []);

  const chooseModal = (flag: number) => {
    let isOpen: boolean;
    let func: Dispatch<SetStateAction<boolean>>;
    if (flag === 1) {
      isOpen = termsIsOpen;
      func = setTermsIsOpen;
    } else {
      isOpen = privacyIsOpen;
      func = setPrivacyIsOpen;
    }
    return { isOpen, func };
  };

  return (
    <>
      <SecondaryModal
        title="利用規約"
        flag={termsIsOpen}
        onClose={() => {
          let flag = 1;
          onCloseModal(flag);
        }}
        height="80%"
      >
        <TermsContent />
      </SecondaryModal>
      <SecondaryModal
        title="プライバシーポリシー"
        flag={privacyIsOpen}
        onClose={() => {
          let flag = 2;
          onCloseModal(flag);
        }}
        height="60%"
      >
        <PrivacyContent />
      </SecondaryModal>
      <nav
        className={`absolute right-5 bg-white divide-y border w-56 rounded-md py-2 shadow-md ${
          isOpen || "hidden"
        }`}
      >
        <div>
          <p className="text-sm text-[#0A2463] my-2 mx-4">Rules</p>
          <div className="flex flex-col text-[#2D3748]">
            <button
              className="py-1.5 px-3 hover:bg-gray-200 text-left"
              onClick={() => {
                let flag = 1;
                onClickOpenModal(flag);
              }}
            >
              利用規約
            </button>
            <button
              className="py-1.5 px-3 hover:bg-gray-200 text-left"
              onClick={() => {
                let flag = 2;
                onClickOpenModal(flag);
              }}
            >
              プライバシーポリシー
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#0A2463] my-2 mx-4">Creator</p>
          <div className="flex flex-col text-[#2D3748]">
            <a
              className="flex items-center py-1.5 px-3 hover:bg-gray-200 text-left"
              href="http://twitter.com/ryuki_runteq_27"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              <p className="ml-2">X</p>
            </a>
            <a
              className="flex items-center py-1.5 px-3 hover:bg-gray-200 text-left"
              href="https://github.com/hattoriryuki"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <p className="ml-2">GitHub</p>
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#0A2463] my-2 mx-4">About</p>
          <div className="flex flex-col text-[#2D3748]">
            <button className="py-1.5 px-3 hover:bg-gray-200 text-left">
              使い方
            </button>
          </div>
        </div>
      </nav>
    </>
  );
});
