import { FC, memo } from "react";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Toast: FC = memo(() => {
  return (
    <>
      <div className="flex items-center w-[300px] h-12 py-4 px-2 mb-4 rounded-lg shadow bg-green-600">
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg text-lg">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className="ms-3 text-mg font-normal text-white">
          Item moved successfully.
        </div>
        <button className="ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-600 rounded-lg p-1.5 hover:bg-green-500 flex items-center justify-center h-8 w-8">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="flex items-center w-[300px] h-12 py-4 px-2 mb-4 rounded-lg shadow bg-red-600">
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg text-lg">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
        <div className="ms-3 text-sm font-normal text-white">
          Item has been deleted.
        </div>
        <button className="ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-600 rounded-lg p-1.5 hover:bg-red-500 flex items-center justify-center h-8 w-8">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="flex items-center w-[300px] h-12 py-4 px-2 mb-4 rounded-lg shadow bg-blue-600">
        <div className="flex items-center justify-center w-8 h-8 text-white rounded-lg text-lg">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <div className="ms-3 text-sm font-normal text-white">
          Improve password difficulty.
        </div>
        <button className="ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-600 rounded-lg p-1.5 hover:bg-blue-500 flex items-center justify-center h-8 w-8">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </>
  );
});
