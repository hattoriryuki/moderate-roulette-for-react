import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const PrimaryText: FC<Props> = memo((props) => {
  const { children, title } = props;

  return (
    <div className="text-[#1A202C]">
      <p className="mt-8 mb-2 text-[#0a2463] text-lg font-bold">
        {title}
      </p>
      <div>
        {children}
      </div>
    </div>
  );
});
