import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowRotateRight,
  faCirclePlay,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "../../assets/images/logo.png";
import titleImg from "../../assets/images/title.png";

export const Top: FC = memo(() => {
  return (
    <>
      <header>
        <img src={logoImg} alt="Application logo image" />
        <img src={titleImg} alt="Application title image" />
      </header>
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