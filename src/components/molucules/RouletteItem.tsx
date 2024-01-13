import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  memo,
  useCallback,
  useState,
} from "react";
import { faCircle, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Item } from "../../types/item";
import { useDrawCanvas } from "../../hooks/useDrawCanvas";
import { useToast } from "../../hooks/useToast";

type Props = {
  items: Item[];
  setItems: Dispatch<React.SetStateAction<Item[]>>;
  canvas: HTMLCanvasElement | null;
};

export const RouletteItem: FC<Props> = memo((props) => {
  const { items, setItems, canvas } = props;
  const [editTarget, setEditTarget] = useState<number | null>();
  const [editedText, setEditedText] = useState("");
  const { drawRoulette, drawTriangle } = useDrawCanvas(canvas);
  const showToast = useToast();

  const onClickEdit = useCallback((text: string, index: number) => {
    setEditedText(text);
    setEditTarget(index);
  }, []);

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  }, []);

  const onClickSubmit = useCallback(
    (index: number) => {
      if (!editedText) {
        showToast({
          status: "error",
          title: "編集後のテキストを入力してください",
        });
        return;
      }
      setEditTarget(null);
      const new_items = [...items];
      new_items[index].text = editedText;
      setItems(new_items);
      showToast({ status: "submit", title: "編集が完了しました" });
    },
    [editedText]
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>, index: number) => {
      e.preventDefault();
      onClickSubmit(index);
    },
    [editedText]
  );

  const onClickDelete = useCallback(
    (index: number) => {
      const new_items = [...items];
      new_items.splice(index, 1);
      setItems(new_items);
      drawRoulette({ angleCounter: 0, items: new_items });
      drawTriangle();
    },
    [items]
  );

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index} className="flex mb-2 items-center justify-between">
            <div className="flex w-full">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-2xl"
                style={{ color: `${item.color}` }}
              />
              {index === editTarget ? (
                <form
                  className="w-[80%] md:w-[90%]"
                  onSubmit={(e) => {
                    onSubmit(e, index);
                  }}
                >
                  <input
                    type="text"
                    value={editedText}
                    className="border outline-none ml-2 w-full"
                    onChange={onChangeText}
                  />
                </form>
              ) : (
                <p className="ml-2">{item.text}</p>
              )}
            </div>
            <div className="flex">
              {index === editTarget ? (
                <button
                  className="text-green-400 text-xl"
                  onClick={() => {
                    onClickSubmit(index);
                  }}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </button>
              ) : (
                <button
                  className="text-gray-400 text-xl"
                  onClick={() => {
                    onClickEdit(item.text, index);
                  }}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              )}
              <button
                className="text-red-400 text-xl ml-4"
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
});
