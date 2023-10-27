import { useCallback, useEffect } from "react";

export const useDrawCanvas = (canvas: HTMLCanvasElement | null) => {
  const labelData = ["red", "blue", "yellow", "green"];
  const ctx = canvas && canvas.getContext("2d");
  let radius = 220;

  useEffect(() => {
    if (!ctx) return;
    ctx.translate(canvas.width / 2, canvas.height / 2);
  }, [canvas]);

  const drawRoullet = useCallback(
    (angleCounter: number) => {
      let degPart = 90;
      let angle = 0;
      let sumAngle = 0;

      if (!ctx) return;
      labelData.map((data) => {
        angle = sumAngle + angleCounter;
        let startAngle = ((360 - angle) * Math.PI) / 180;
        let endAngle = ((360 - (angle + degPart)) * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.fillStyle = data;
        ctx.arc(0, 0, radius, startAngle, endAngle, true);
        ctx.fill();
        sumAngle += degPart;
      });
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

  return { drawRoullet, drawTriangle };
};
