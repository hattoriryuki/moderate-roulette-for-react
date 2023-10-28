import { FC, memo, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowRotateRight,
  faPen,
  faTrashCan,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCirclePlay,
  faCircleStop,
} from "@fortawesome/free-regular-svg-icons";
import { useDrawCanvas } from "../../hooks/useDrawCanvas";

export const Top: FC = memo(() => {
  const [canvasObject, setCanvasObject] = useState<HTMLCanvasElement | null>(
    null
  );
  const [isRunning, setIsRunnig] = useState(false);
  const { drawRoullet, drawTriangle } = useDrawCanvas(canvasObject);
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    setCanvasObject(document.querySelector("canvas"));
    drawRoullet(0);
    drawTriangle();
  }, [canvasObject]);

  const onClickStart = () => {
    setIsRunnig(true);
    let angleCounter = 0;
    intervalRef.current = setInterval(() => {
      angleCounter += 26;
      drawRoullet(angleCounter);
    }, 10);
  };

  const onClickStop = () => {
    setIsRunnig(false);
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-[calc(100vh_-_120px)] justify-around items-center">
        <canvas
          className="md:w-[500px] w-[350px] md:h-[500px] h-[350px] border"
          width="500px"
          height="500px"
        >
          Canvas not supported.
        </canvas>
        <div className="flex flex-col h-[500px] w-[90%] md:w-2/5">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Title"
              className="outline-none border-b border-[#4A5568] w-full"
            />
          </form>
          <div className="text-gray-400 text-sm">※入力は任意です</div>
          <div className="flex basis-[20%] items-center">
            <form action="" className="w-full">
              <input
                type="text"
                placeholder="Item"
                className="outline-none border-b border-[#4A5568] w-full"
              />
            </form>
            <div className="flex text-4xl">
              <button className="text-yellow-400 ml-2">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className="text-gray-600 ml-2">
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </button>
              {isRunning ? (
                <button className="text-red-400 ml-2" onClick={onClickStop}>
                  <FontAwesomeIcon icon={faCircleStop} />
                </button>
              ) : (
                <button className="text-green-400 ml-2" onClick={onClickStart}>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
              )}
            </div>
          </div>
          <div className="border border-[#4A5568] basis-[80%] p-5">
            <div className="flex mb-2 items-center justify-between">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-red-500 text-2xl"
                />
                <p className="ml-2">ラベル１</p>
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
            <div className="flex mb-2 items-center justify-between">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-blue-500 text-2xl"
                />
                <p className="ml-2">ラベル２</p>
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
          </div>
        </div>
      </div>
    </>
  );
});
