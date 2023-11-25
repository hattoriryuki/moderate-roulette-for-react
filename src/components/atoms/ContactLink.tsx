import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const ContactLink: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <a
      href="https://twitter.com/messages/compose?recipient_id=1457235129190223872"
      target="_blank"
      className="text-teal-500 hover:underline"
    >
      {children}
    </a>
  );
});
