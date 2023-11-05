import { useCallback, useState } from "react";

import { Item } from "../types/item";

type Props = {
  anglePart: number;
  currentAngle: number;
  items: Item[];
};

export const useGetJudgement = () => {
  const [result, setResult] = useState<Item[]>([]);

  const getJudgement = useCallback((props: Props) => {
    const { anglePart, currentAngle, items } = props;
    const reversed = [...items].reverse();
    let sum = 0;

    reversed.map((item) => {
      if (
        anglePart * sum < currentAngle &&
        currentAngle < anglePart * (sum + 1)
      ) {
        setResult([{ text: item.text, color: item.color }]);
      }
      sum++;
    });
  }, []);
  console.log(result);
  return { getJudgement };
};
