import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  IconDefinition,
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  status: "submit" | "error" | "info";
  title: string;
  flag: boolean;
  closeEvent: () => void;
};

type Status = {
  color: string;
  hover: string;
  icon: IconDefinition;
};

export const Toast: FC<Props> = memo((props) => {
  const { status, title, flag, closeEvent } = props;
  const [toastStatus, setToastStatus] = useState<Status>({
    color: "",
    hover: "",
    icon: faCircleCheck,
  });

  useEffect(() => {
    getToastData();
  }, [flag]);

  const getToastData = useCallback(() => {
    let color = "";
    let hover = "";
    let icon = faCircleCheck;

    switch (true) {
      case status === "submit":
        color = "bg-green-600";
        hover = "hover:bg-green-500";
        icon = faCircleCheck;
        break;
      case status === "error":
        color = "bg-red-600";
        hover = "hover:bg-red-500";
        icon = faCircleExclamation;
        break;
      case status === "info":
        color = "bg-blue-600";
        hover = "hover:bg-blue-500";
        icon = faCircleInfo;
        break;
    }
    const newStatus = { color, hover, icon };
    setToastStatus(newStatus);
  }, [flag]);

  return (
    <div
      className={`absolute left-1/2 translate-x-[-50%] ${
        flag ? "top-2" : "-top-20"
      }`}
    >
      <div
        className={`flex items-center w-[360px] md:max-w-[500px] h-12 py-4 px-2 rounded-lg shadow transition-transform duration-500 ${
          flag || "-translate-y-[100vh]"
        } ${toastStatus.color}`}
      >
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg text-lg">
          <FontAwesomeIcon icon={toastStatus.icon} />
        </div>
        <div className="ms-3 text-mg font-normal text-white">{title}</div>
        <button
          className={`ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-600 rounded-lg p-1.5 ${toastStatus.hover} flex items-center justify-center h-8 w-8`}
          onClick={closeEvent}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
});
