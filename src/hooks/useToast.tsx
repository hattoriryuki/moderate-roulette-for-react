import { ReactNode, createContext, memo, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { Toast } from "../components/organisms/Toast";

type Props = {
  children: ReactNode;
};

type ToastStatus = "submit" | "error" | "info";

type ToastParams = {
  title: string;
  status: ToastStatus;
};

export const ToastContext = createContext(({status, title}: ToastParams) => {});

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = memo((props: Props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [toastStatus, setToastStatus] = useState<ToastStatus>("submit");
  const [toastTitle, setToastTitle] = useState("");

  const showToast = ({ status, title }: ToastParams) => {
    setIsOpen(!isOpen);
    setToastStatus(status);
    setToastTitle(title);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {createPortal(
        <div id="toast" className="absolute top-0 left-0 z-10">
          <Toast status={toastStatus} title={toastTitle} flag={isOpen} />
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
});
