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
  icon: IconDefinition;
};

export const Toast: FC<Props> = memo((props) => {
  const { status, title, flag, closeEvent } = props;
  const [toastStatus, setToastStatus] = useState<Status>({
    color: "",
    icon: faCircleCheck,
  });

  useEffect(() => {
    getToastData();
  }, [flag]);

  const getToastData = useCallback(() => {
    let color = "";
    let icon = faCircleCheck;

    switch (true) {
      case status === "submit":
        color = "green";
        icon = faCircleCheck;
        break;
      case status === "error":
        color = "red";
        icon = faCircleExclamation;
        break;
      case status === "info":
        color = "blue";
        icon = faCircleInfo;
        break;
    }
    const newStatus = { color, icon };
    setToastStatus(newStatus);
  }, [flag]);

  return (
    <div className="absolute top-2 left-1/2 translate-x-[-50%]">
      <div
        className={`flex items-center max-w-[500px] h-12 py-4 px-2 rounded-lg shadow transition-transform duration-500 ${
          flag || "-translate-y-[100vh]"
        } bg-${toastStatus.color}-600`}
      >
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg text-lg">
          <FontAwesomeIcon icon={toastStatus.icon} />
        </div>
        <div className="ms-3 text-mg font-normal text-white">{title}</div>
        <button
          className={`ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-600 rounded-lg p-1.5 hover:bg-${
            toastStatus.color
          }-500 flex items-center justify-center h-8 w-8`}
          onClick={closeEvent}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
});
