import {
  ChangeEvent,
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faCircleStop,
} from "@fortawesome/free-regular-svg-icons";

import { useDrawCanvas } from "../../hooks/useDrawCanvas";
import { RouletteItem } from "../molucules/RouletteItem";
import { Item } from "../../types/item";
import { Canvas } from "../atoms/Canvas";
import { RouletteResultModal } from "../organisms/modal/RouletteResultModal";
import { useControlRoulette } from "../../hooks/useControlRoulette";
import { useAddItem } from "../../hooks/useAddItem";
import { PrimaryInput } from "../atoms/PrimaryInput";
import { SecondaryModal } from "../organisms/modal/SecondaryModal";
import { InitialContent } from "../molucules/InitialContent";

export const Top: FC = memo(() => {
  const [canvasObject, setCanvasObject] = useState<HTMLCanvasElement | null>(
    null
  );
  const [isRunning, setIsRunnig] = useState(false);
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [titleText, setTitleText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { drawRoulette, drawTriangle } = useDrawCanvas(canvasObject);
  const { addItem } = useAddItem({ items, setItems, drawRoulette });
  const { runRoulette, stopRoulette, resultRef } = useControlRoulette({
    canvas: canvasObject,
    items,
    setModalIsOpen,
  });

  useEffect(() => {
    setCanvasObject(document.querySelector("canvas"));
    drawRoulette({ angleCounter: 0, items });
    drawTriangle();
  }, [canvasObject]);

  const onClickStart = useCallback(() => {
    setIsRunnig(true);
    runRoulette();
  }, [runRoulette]);

  const onClickStop = useCallback(() => {
    stopRoulette();
    setIsRunnig(false);
  }, [stopRoulette]);

  const onClickAdd = useCallback(() => {
    addItem(itemText);
    setItemText("");
  }, [itemText]);

  const onChangeItem = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onClickAdd();
    },
    [itemText]
  );

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  }, []);

  return (
    <>
      <RouletteResultModal
        flag={modalIsOpen}
        result={resultRef}
        title={titleText}
      />
      <SecondaryModal title="Moderate Rouletteへようこそ !">
        <InitialContent />
      </SecondaryModal>
      <div className="flex flex-col md:flex-row h-[700px] md:h-[calc(100vh_-_120px)] md:justify-around items-center overflow-y-scroll">
        <Canvas />
        <div className="flex flex-col h-full md:h-[500px] w-[90%] md:w-2/5">
          <PrimaryInput
            placeholder="Title"
            value={titleText}
            onChange={onChangeTitle}
          />
          <div className="text-gray-400 text-sm">※入力は任意です</div>
          <div className="flex basis-[20%] items-center">
            <form action="" className="w-full" onSubmit={onSubmit}>
              <PrimaryInput
                placeholder="Item"
                value={itemText}
                onChange={onChangeItem}
              />
            </form>
            <div className="flex text-4xl">
              <button className="text-yellow-400 ml-2" onClick={onClickAdd}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="text-gray-600 ml-2"
                onClick={() => {
                  drawRoulette({ angleCounter: 0, items });
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
          <div className="border border-[#4A5568] basis-[80%] p-5 mb-10 overflow-y-scroll max-h-[265px] md:max-h-none">
            <RouletteItem
              items={items}
              setItems={setItems}
              canvas={canvasObject}
            />
          </div>
        </div>
      </div>
    </>
  );
});
