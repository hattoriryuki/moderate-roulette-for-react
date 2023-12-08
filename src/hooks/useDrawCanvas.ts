import { useCallback, useEffect } from "react";

import { Item } from "../types/item";
import { useDrawInitialRoullet } from "./useDrawInitialRoullet";
import { useMediaQuery } from "./useMediaQuery";

type Props = {
  angleCounter: number;
  items: Item[];
};

export const useDrawCanvas = (canvas: HTMLCanvasElement | null) => {
  const ctx = canvas && canvas.getContext("2d");
  const { drawInitialRoullet } = useDrawInitialRoullet(canvas);
  const isDesktop = useMediaQuery();
  let radius = 150;
  let anglePart = 0;

  useEffect(() => {
    if (isDesktop) radius = 220;
  }, []);

  useEffect(() => {
    if (!ctx) return;
    ctx.translate(canvas.width / 6, canvas.height / 6);
  }, [canvas]);

  const drawRoullet = useCallback(
    (props: Props) => {
      const { angleCounter, items } = props;
      if (items.length < 1) {
        drawInitialRoullet({ radius: radius });
      } else {
        anglePart = 360 / items.length;
        let angle = 0;
        let sumAngle = 0;

        if (!ctx) return;
        items.map((data) => {
          angle = sumAngle + angleCounter + 90;
          let startAngle = ((360 - angle) * Math.PI) / 180;
          let endAngle = ((360 - (angle + anglePart)) * Math.PI) / 180;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          if (data.color) ctx.fillStyle = data.color;
          ctx.arc(0, 0, radius, startAngle, endAngle, true);
          ctx.fill();
          sumAngle += anglePart;
        });
      }
    },
    [canvas]
  );

  const drawTriangle = useCallback(() => {
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(0, -radius);
    ctx.lineTo(-8, -(radius + 20));
    ctx.lineTo(8, -(radius + 20));
    ctx.closePath();
    ctx.fillStyle = "#FF4D4D";
    ctx.fill();
  }, [canvas]);

  return { drawRoullet, drawTriangle, anglePart };
};
