import {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";
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

export const ToastContext = createContext(
  ({ status, title }: ToastParams) => {}
);

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = memo((props: Props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [toastStatus, setToastStatus] = useState<ToastStatus>("submit");
  const [toastTitle, setToastTitle] = useState("");

  const showToast = useCallback(({ status, title }: ToastParams) => {
    setIsOpen(true);
    setToastStatus(status);
    setToastTitle(title);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  }, []);

  const onClickClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {createPortal(
        <Toast
          status={toastStatus}
          title={toastTitle}
          flag={isOpen}
          closeEvent={onClickClose}
        />,
        document.body
      )}
    </ToastContext.Provider>
  );
});
