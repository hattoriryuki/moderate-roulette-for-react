import { FC, memo } from "react";

export const Canvas: FC = memo(() => {
  return (
    <canvas
      className="md:w-[500px] w-[350px] md:h-[500px] h-[350px]"
      width="500px"
      height="500px"
    >
      Canvas not supported.
    </canvas>
  );
});
