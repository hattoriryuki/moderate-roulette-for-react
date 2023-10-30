import { FC, memo } from "react";
import { faCircle, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Item } from "../../types/item";

export const RoulletItem: FC<Item> = memo((props) => {
  const { text, color } = props;

  return (
    <div className="flex mb-2 items-center justify-between">
      <div className="flex">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-2xl"
          style={{ color: `${color}` }}
        />
        <p className="ml-2">{text}</p>
      </div>
      <div>
        <button className="text-gray-400 text-xl">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="text-red-400 text-xl ml-4">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
});
