import {
  FC,
  MutableRefObject,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";

import { Item } from "../../../types/item";
import { BreakPoint, useMediaQuery } from "../../../hooks/useMediaQuery";

type Props = {
  flag: boolean;
  result: MutableRefObject<Item | null>;
  title: string | null;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "30%",
    padding: 0,
    boxShadow: "2px 8px 21px -2px #777777",
  },
};

export const RoulletResultModal: FC<Props> = memo((props) => {
  const { flag, result, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(BreakPoint.mobile);
  const shareURL = `http://twitter.com/share?url=https://moderate-roullet-for-react.web.app/
  &text=${title ? title + "に" : "今回"}選ばれたのは、「 ${
    result.current?.text
  } 」でした！
  &hashtags=ModerateRoullet`;

  useEffect(() => {
    if (isMobile.match) {
      customStyles.content.width = "90%";
      customStyles.content.height = "25%";
    }
  }, []);

  useEffect(() => {
    setIsOpen(flag);
  }, [flag]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  Modal.setAppElement("body");

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="flex justify-between bg-green-300 px-2 h-7 items-center">
        <p>結果</p>
        <button className="text-gray-500" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="p-4 h-[calc(100%_-_28px)] flex flex-col justify-around">
        <p>{title && `${title}に`}選ばれたのは...</p>
        <div className="flex justify-center items-center h-[calc(100%_-_28px)]">
          <div className="flex items-center gap-2 text-2xl">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-3xl"
              style={{ color: `${result.current?.color}` }}
            />
            <div>{result.current?.text}</div>
          </div>
          <p className="absolute right-4">です</p>
        </div>
        <div className="flex justify-end">
          <a href={shareURL} target="_blank">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="bg-black text-white text-2xl rounded-md p-1"
            />
          </a>
        </div>
      </div>
    </Modal>
  );
});
