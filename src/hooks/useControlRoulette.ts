import { Dispatch, SetStateAction, useCallback, useRef } from "react";

import { Item } from "../types/item";
import { useDrawCanvas } from "./useDrawCanvas";
import { useGetJudgement } from "./useGetJudgement";

type Props = {
  canvas: HTMLCanvasElement | null;
  items: Item[];
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const useControlRoulette = (props: Props) => {
  const { canvas, items, setModalIsOpen } = props;
  const { drawRoulette } = useDrawCanvas(canvas);
  const { getJudgement, resultRef } = useGetJudgement();
  const intervalRef = useRef<NodeJS.Timer>();
  const currentAngleRef = useRef(0);
  const stopFlagRef = useRef(false);

  const runRoulette = useCallback(() => {
    let angleCounter = 0;
    let count = 0;

    intervalRef.current = setInterval(() => {
      angleCounter += 26;
      if (stopFlagRef.current) {
        count++;
        angleCounter -= count / 10;
      }
      drawRoulette({ angleCounter, items });
      currentAngleRef.current = angleCounter % 360;
    }, 10);
  }, [drawRoulette, items]);

  const stopRoulette = useCallback(() => {
    stopFlagRef.current = true;
    setTimeout(() => {
      if (!intervalRef) return;
      clearInterval(intervalRef.current);
      getJudgement({
        currentAngle: currentAngleRef.current,
        anglePart: 360 / items.length,
        items,
      });
      setTimeout(() => {
        setModalIsOpen(true);
      }, 800);
      setModalIsOpen(false);
      stopFlagRef.current = false;
    }, 2000);
  }, [items]);

  return { runRoulette, stopRoulette, resultRef };
};
