import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  url: string;
};

export const PrimaryLink: FC<Props> = memo((props) => {
  const { children, url } = props;
  return (
    <a
      target="_blank"
      className="flex items-center py-1.5 px-3 hover:bg-gray-200 text-left"
      href={url}
    >
      {children}
    </a>
  );
});
