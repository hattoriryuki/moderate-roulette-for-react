import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from "react";

import { PrimaryModal } from "./modal/PrimaryModal";
import { TermsContent } from "../molucules/TermsContent";
import { PrivacyContent } from "../molucules/PrivacyContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { PrimaryLink } from "../atoms/PrimaryLink";
import { ContactLink } from "../atoms/ContactLink";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
      <PrimaryModal
        title="利用規約"
        flag={termsIsOpen}
        onClose={() => {
          let flag = 1;
          onCloseModal(flag);
        }}
        height="80%"
      >
        <TermsContent />
      </PrimaryModal>
      <PrimaryModal
        title="プライバシーポリシー"
        flag={privacyIsOpen}
        onClose={() => {
          let flag = 2;
          onCloseModal(flag);
        }}
        height="60%"
      >
        <PrivacyContent />
      </PrimaryModal>
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
            <PrimaryLink url="http://twitter.com/ryuki_runteq_27">
              <FontAwesomeIcon icon={faXTwitter} />
              <p className="ml-2">X</p>
            </PrimaryLink>
            <PrimaryLink url="https://github.com/hattoriryuki">
              <FontAwesomeIcon icon={faGithub} />
              <p className="ml-2">GitHub</p>
            </PrimaryLink>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#0A2463] my-2 mx-4">Help</p>
          <div className="text-[#2D3748] hover:bg-gray-200 hover:cursor-pointer">
            <ContactLink className="flex items-center px-3 py-1.5">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="ml-2">お問い合せ</p>
            </ContactLink>
          </div>
        </div>
      </nav>
    </>
  );
});
