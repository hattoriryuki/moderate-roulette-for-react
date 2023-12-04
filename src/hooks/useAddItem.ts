import { Dispatch, SetStateAction, useCallback } from "react";

import { Item } from "../types/item";
import { useGetRandomColor } from "./useGetRandomColor";
import { useToast } from "./useToast";

type Argument = {
  angleCounter: number;
  items: Item[];
};

type Props = {
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;
  drawRoullet: (props: Argument) => void;
};

export const useAddItem = (props: Props) => {
  const { items, setItems, drawRoullet } = props;
  const { getRandomColor, itemColor } = useGetRandomColor();
  const showToast = useToast();

  const addItem = useCallback(
    (itemText: string) => {
      if (!itemText) {
        showToast({ status: "error", title: "アイテムを入力してください" });
        return;
      }
      getRandomColor();
      const newItems = [...items, { text: itemText, color: itemColor }];
      setItems(newItems);
      drawRoullet({ angleCounter: 0, items: newItems });
    },
    [items, drawRoullet]
  );

  return { addItem };
};
