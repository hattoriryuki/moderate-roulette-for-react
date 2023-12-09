import { FC, memo } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Canvas: FC = memo(() => {
  const isDesktop = useMediaQuery();

  return (
    <canvas
      className="md:w-[500px] w-[350px] md:h-[500px] h-[350px]"
      width={isDesktop ? "500px" : "350"}
      height={isDesktop ? "500px" : "350"}
    >
      Canvas not supported.
    </canvas>
  );
});
