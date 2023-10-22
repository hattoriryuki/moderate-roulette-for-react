import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowRotateRight,
  faCirclePlay,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export const Top: FC = memo(() => {
  return (
    <>
      <header>Moderate Roullet</header>
      <div>
        <div>
          <canvas>Canvas not supported.</canvas>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="Title" />
          </form>
          <form action="">
            <input type="text" placeholder="Item" />
          </form>
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button>
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <div>
            <div>
              <div>⚪︎</div>
              <p>ラベル１</p>
              <button>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
            <div>
              <div>⚪︎</div>
              <p>ラベル２</p>
              <button>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>&copy; 2023 Moderate Roullet. All rights reserved</footer>
    </>
  );
});
