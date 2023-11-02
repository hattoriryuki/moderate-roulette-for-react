import { useCallback, useEffect } from "react";

type Props = {
  radius: number;
};

export const useDrawInitialRoullet = (canvas: HTMLCanvasElement | null) => {
  const ctx = canvas && canvas.getContext("2d");

  useEffect(() => {
    if (!ctx) return;
    ctx.translate(canvas.width / 2, canvas.height / 2);
  }, []);

  const drawInitialRoullet = useCallback(
    (props: Props) => {
      const { radius } = props;
      if (!ctx) return;
      ctx.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );
      ctx.beginPath();
      ctx.arc(0, 0, radius, (0 * Math.PI) / 180, (360 * Math.PI) / 180);
      ctx.stroke();
      ctx.font = "15px serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#4A5568";
      ctx.fillText("アイテムを登録してください", 0, 0);
    },
    [canvas]
  );

  return { drawInitialRoullet };
};
