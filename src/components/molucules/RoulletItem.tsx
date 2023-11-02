import { FC, memo, useState } from "react";
import { faCircle, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Item } from "../../types/item";

export const RoulletItem: FC<Item> = memo((props) => {
  const { text, color } = props;
  const [editFlg, setEditFlg] = useState(false);
  const [editedText, setEditedText] = useState("");

  const onClickEdit = () => {
    setEditedText(text);
    setEditFlg(true);
  };

  return (
    <div className="flex mb-2 items-center justify-between">
      <div className="flex w-full">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-2xl"
          style={{ color: `${color}` }}
        />
        {editFlg ? (
          <input
            type="text"
            value={editedText}
            className="border outline-none ml-2 w-[90%]"
          />
        ) : (
          <p className="ml-2">{text}</p>
        )}
      </div>
      <div className="flex">
        <button className="text-gray-400 text-xl" onClick={onClickEdit}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="text-red-400 text-xl ml-4">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
});
