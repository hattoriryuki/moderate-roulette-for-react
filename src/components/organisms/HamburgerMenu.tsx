import { FC, memo, useCallback, useState } from "react";

import { SecondaryModal } from "./SecondaryModal";
import { TermsContent } from "../molucules/TermsContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const HamburgerMenu: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClickTerms = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
    onClose();
  }, [isOpen]);

  const onCloseTerms = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  const labelData = [
    {
      title: "Rules",
      label1: "利用規約",
      link1: onClickTerms,
      label2: "プライバシーポリシー",
      link2: onClickTerms,
    },
    {
      title: "Creator",
      label1: "X-Twitter",
      link1: onClickTerms,
      label2: "GitHub",
      link2: onClickTerms,
    },
    {
      title: "About",
      label1: "使い方",
      link1: onClickTerms,
    },
  ];

  return (
    <>
      <SecondaryModal flag={modalIsOpen} onClose={onCloseTerms}>
        <TermsContent />
      </SecondaryModal>
      <div
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
                  onClick={onClickTerms}
                >
                  {data.label1}
                </button>
                {data.label2 && (
                  <button className="py-1.5 px-3 hover:bg-gray-200 text-left">
                    {data.label2}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
