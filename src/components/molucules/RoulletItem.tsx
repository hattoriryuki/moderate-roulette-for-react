import { ChangeEvent, Dispatch, FC, memo, useCallback, useState } from "react";
import { faCircle, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Item } from "../../types/item";

type Props = {
  items: Item[];
  setItems: Dispatch<React.SetStateAction<Item[]>>;
};

export const RoulletItem: FC<Props> = memo((props) => {
  const { items, setItems } = props;
  const [editTarget, setEditTarget] = useState<number | null>();
  const [editedText, setEditedText] = useState("");

  const onClickEdit = (text: string, index: number) => {
    setEditedText(text);
    setEditTarget(index);
  };

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  }, []);

  const onClickSubmit = (index: number) => {
    setEditTarget(null);
    const new_items = [...items];
    new_items[index].text = editedText;
    setItems(new_items);
  };

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
                <input
                  type="text"
                  value={editedText}
                  className="border outline-none ml-2 w-[90%]"
                  onChange={onChangeText}
                />
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
              <button className="text-red-400 text-xl ml-4">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
});
