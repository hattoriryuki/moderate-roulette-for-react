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

  const labelData = [
    {
      title: "Rules",
      label1: "利用規約",
      link1: onClickOpenModal,
      label2: "プライバシーポリシー",
      link2: onClickOpenModal,
    },
    {
      title: "Creator",
      label1: "X-Twitter",
      link1: onCloseModal,
      label2: "GitHub",
      link2: onCloseModal,
    },
    {
      title: "About",
      label1: "使い方",
      link1: onCloseModal,
    },
  ];

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
        {labelData.map((data) => {
          return (
            <div key={data.label1}>
              <p className="text-sm text-[#0A2463] my-2 mx-4">{data.title}</p>
              <div className="flex flex-col text-[#2D3748]">
                <button
                  className="py-1.5 px-3 hover:bg-gray-200 text-left"
                  onClick={() => {
                    let flag = 1;
                    data.link1(flag);
                  }}
                >
                  {data.label1}
                </button>
                {data.label2 && (
                  <button
                    className="py-1.5 px-3 hover:bg-gray-200 text-left"
                    onClick={() => {
                      let flag = 2;
                      data.link2(flag);
                    }}
                  >
                    {data.label2}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </nav>
    </>
  );
});
