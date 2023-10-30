import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faCircleStop,
} from "@fortawesome/free-regular-svg-icons";

import { useDrawCanvas } from "../../hooks/useDrawCanvas";
import { RoulletItem } from "../molucules/RoulletItem";
import { useRandomColor } from "../../hooks/useRandomColor";

export const Top: FC = memo(() => {
  const [canvasObject, setCanvasObject] = useState<HTMLCanvasElement | null>(
    null
  );
  const [isRunning, setIsRunnig] = useState(false);
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([
    { text: "ラベル１", color: "red" },
    { text: "ラベル２", color: "blue" },
    { text: "ラベル３", color: "yellow" },
    { text: "ラベル４", color: "lime" },
  ]);
  const { drawRoullet, drawTriangle } = useDrawCanvas(canvasObject);
  const { getRandomColor, itemColor } = useRandomColor();
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    setCanvasObject(document.querySelector("canvas"));
    drawRoullet(0, items);
    drawTriangle();
  }, [canvasObject]);

  const onClickStart = useCallback(() => {
    setIsRunnig(true);
    let angleCounter = 0;
    intervalRef.current = setInterval(() => {
      angleCounter += 26;
      drawRoullet(angleCounter, items);
    }, 10);
  }, [drawRoullet]);

  const onClickStop = useCallback(() => {
    setIsRunnig(false);
    clearInterval(intervalRef.current);
  }, []);

  const onClickAdd = useCallback(() => {
    getRandomColor();
    const newItems = [...items, { text: itemText, color: itemColor }];
    setItems(newItems);
    setItemText("");
    drawRoullet(0, newItems);
  }, [itemText]);

  const onChangeLabel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  }, []);

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
                value={itemText}
                onChange={onChangeLabel}
                className="outline-none border-b border-[#4A5568] w-full"
              />
            </form>
            <div className="flex text-4xl">
              <button className="text-yellow-400 ml-2" onClick={onClickAdd}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="text-gray-600 ml-2"
                onClick={() => {
                  drawRoullet(0, items);
                }}
              >
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
            {items.map((item) => {
              return <RoulletItem label={item.text} color={item.color} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
});
