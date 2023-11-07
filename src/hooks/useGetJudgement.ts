import { useCallback, useRef, useState } from "react";

import { Item } from "../types/item";

type Props = {
  anglePart: number;
  currentAngle: number;
  items: Item[];
};

export const useGetJudgement = () => {
  const resultRef = useRef<Item | null>(null);

  const getJudgement = useCallback((props: Props) => {
    const { anglePart, currentAngle, items } = props;
    const reversed = [...items].reverse();

    reversed.map((item, index) => {
      if (
        anglePart * index < currentAngle &&
        currentAngle < anglePart * (index + 1)
      ) {
        resultRef.current = { text: item.text, color: item.color };
      }
    });
  }, []);
  return { getJudgement, resultRef };
};
