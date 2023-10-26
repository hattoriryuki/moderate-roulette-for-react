import { useCallback } from "react";

export const useDrawCanvas = (canvasObject: HTMLCanvasElement | null) => {
  const data = ["red", "blue", "yellow", "green"];
  const canvas = canvasObject;
  const ctx = canvas && canvas.getContext("2d");
  let radius = 220;

  const drawRoullet = useCallback(() => {
    let degPart = 90;
    let angle = 0;

    if (!ctx) { return};
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (let i = 0; i < 4; i++) {
      let startAngle = ((360 - angle) * Math.PI) / 180;
      let endAngle = ((360 - (angle + degPart)) * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.fillStyle = data[i];
      ctx.arc(0, 0, radius, startAngle, endAngle, true);
      ctx.fill();
      angle += degPart;
    }
  }, [canvas]);

  return { drawRoullet };
};
