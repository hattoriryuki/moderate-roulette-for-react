import { FC, memo } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Canvas: FC = memo(() => {
  const isDesktop = useMediaQuery();
  const canvas = document.querySelector("canvas");

  if (isDesktop && canvas) {
    canvas.width = 500;
    canvas.height = 500;
  }

  return (
    <canvas
      className="md:w-[500px] w-[350px] md:h-[500px] h-[350px]"
      width="350px"
      height="350px"
    >
      Canvas not supported.
    </canvas>
  );
});
