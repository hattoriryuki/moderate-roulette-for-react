import { FC, memo, useCallback, useState } from "react";

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

  const onClickTerms = useCallback(() => {
    setTermsIsOpen(!termsIsOpen);
    onClose();
  }, [isOpen]);

  const onCloseTerms = useCallback(() => {
    setTermsIsOpen(false);
  }, []);

  const onClickPrivacy = useCallback(() => {
    setPrivacyIsOpen(!termsIsOpen);
    onClose();
  }, [isOpen]);

  const onClosePrivacy = useCallback(() => {
    setPrivacyIsOpen(false);
  }, []);

  const labelData = [
    {
      title: "Rules",
      label1: "利用規約",
      link1: onClickTerms,
      label2: "プライバシーポリシー",
      link2: onClickPrivacy,
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
      <SecondaryModal
        title="利用規約"
        flag={termsIsOpen}
        onClose={onCloseTerms}
        height="80%"
      >
        <TermsContent />
      </SecondaryModal>
      <SecondaryModal
        title="プライバシーポリシー"
        flag={privacyIsOpen}
        onClose={onClosePrivacy}
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
                  onClick={data.link1}
                >
                  {data.label1}
                </button>
                {data.label2 && (
                  <button
                    className="py-1.5 px-3 hover:bg-gray-200 text-left"
                    onClick={data.link2}
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
