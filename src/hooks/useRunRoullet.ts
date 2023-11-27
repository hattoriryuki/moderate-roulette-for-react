import { useCallback, useRef } from "react";

import { Item } from "../types/item";
import { useDrawCanvas } from "./useDrawCanvas";

type Props = {
  canvas: HTMLCanvasElement | null;
  items: Item[];
};

export const useRunRoullet = (props: Props) => {
  const { canvas, items } = props;
  const { drawRoullet } = useDrawCanvas(canvas);
  const intervalRef = useRef<NodeJS.Timer>();
  let stopFlag = false;
  let currentAngle = 0;

  const runRoullet = useCallback(() => {
    let angleCounter = 0;
    let count = 0;

    intervalRef.current = setInterval(() => {
      angleCounter += 26;
      if (stopFlag) {
        count++;
        angleCounter -= count / 10;
      }
      drawRoullet({ angleCounter, items });
      currentAngle = angleCounter % 360;
    }, 10);
    return intervalRef.current;
  }, [drawRoullet, items]);

  return {runRoullet, currentAngle};
};
