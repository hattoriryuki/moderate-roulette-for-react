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

    reversed.map((item, index) => {
      if (
        anglePart * index < currentAngle &&
        currentAngle < anglePart * (index + 1)
      ) {
        setResult([{ text: item.text, color: item.color }]);
      }
    });
  }, []);
  console.log(result);
  return { getJudgement };
};
