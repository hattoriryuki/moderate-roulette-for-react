import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logoImg from "../../../assets/images/logo.png";
import titleImg from "../../../assets/images/title.png";

export const Header: FC = memo(() => {
  return (
    <header className="bg-stone-300 h-12 md:h-16">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          <img
            src={logoImg}
            alt="Application logo image"
            className="w-12 md:w-14 h-12 md:h-14 ml-4 cursor-pointer"
          />
          <img
            src={titleImg}
            alt="Application title image"
            className="h-7 md:h-8 w-56 md:w-60 ml-4 cursor-pointer"
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-white mr-4 md:mr-9 cursor-pointer"
        />
      </div>
    </header>
  );
});
