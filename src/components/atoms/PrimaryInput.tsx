import { ChangeEvent, FC, memo } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrimaryInput: FC<Props> = memo((props) => {
  const { placeholder, value, onChange } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="outline-none border-b border-[#4A5568] w-full"
    />
  );
});
