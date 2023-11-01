import { FC, memo } from "react";

import { BreakPoint, useMediaQuery } from "../../hooks/useMediaQuery";

export const Canvas: FC = memo(() => {
  const isMobile = useMediaQuery(BreakPoint.mobile);
  const canvas = document.querySelector("canvas");

  if (isMobile && canvas) {
    canvas.width = 350;
    canvas.height = 350;
  }

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
