import { FC, memo } from "react";
import { faCircle, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  label: string;
  color: string;
};

export const RoulletItem: FC<Props> = memo((props) => {
  const { label, color } = props;

  return (
    <div className="flex mb-2 items-center justify-between">
      <div className="flex">
        <FontAwesomeIcon icon={faCircle} className={`${color} text-2xl`} />
        <p className="ml-2">{label}</p>
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
