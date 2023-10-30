import {
  ChangeEvent,
  FC,
  FormEvent,
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
import { Item } from "../../types/item";

export const Top: FC = memo(() => {
  const [canvasObject, setCanvasObject] = useState<HTMLCanvasElement | null>(
    null
  );
  const [isRunning, setIsRunnig] = useState(false);
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const { drawRoullet, drawTriangle } = useDrawCanvas(canvasObject);
  const { getRandomColor, itemColor } = useRandomColor();
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    setCanvasObject(document.querySelector("canvas"));
    drawRoullet({ angleCounter: 0, items });
    drawTriangle();
  }, [canvasObject]);

  const onClickStart = useCallback(() => {
    setIsRunnig(true);
    let angleCounter = 0;
    intervalRef.current = setInterval(() => {
      angleCounter += 26;
      drawRoullet({ angleCounter, items });
    }, 10);
  }, [drawRoullet, items]);

  const onClickStop = useCallback(() => {
    setIsRunnig(false);
    clearInterval(intervalRef.current);
  }, []);

  const onClickAdd = useCallback(() => {
    if (!itemText) {
      alert("アイテムを入力してください");
      return;
    }
    getRandomColor();
    const newItems = [...items, { text: itemText, color: itemColor }];
    setItems(newItems);
    setItemText("");
    drawRoullet({ angleCounter: 0, items: newItems });
  }, [itemText]);

  const onChangeLabel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickAdd();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-[calc(100vh_-_120px)] justify-around items-center">
        <canvas
          className="md:w-[500px] w-[350px] md:h-[500px] h-[350px]"
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
            <form action="" className="w-full" onSubmit={onSubmit}>
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
                  drawRoullet({ angleCounter: 0, items });
                }}
              >
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </button>
              {isRunning ? (
                <button className="text-red-400 ml-2" onClick={onClickStop}>
                  <FontAwesomeIcon icon={faCircleStop} />
                </button>
              ) : (
                <button
                  className={`text-${
                    (items.length <= 1 && "gray") || "green"
                  }-400 ml-2`}
                  onClick={onClickStart}
                  disabled={items.length <= 1 && true}
                >
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
              )}
            </div>
          </div>
          <div className="border border-[#4A5568] basis-[80%] p-5 overflow-y-scroll">
            {items.map((item, index) => {
              return (
                <RoulletItem key={index} text={item.text} color={item.color} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
