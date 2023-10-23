import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logoImg from "../../../assets/images/logo.png";
import titleImg from "../../../assets/images/title.png";

export const Header: FC = memo(() => {
  return (
    <header className="bg-stone-300 h-16">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          <img
            src={logoImg}
            alt="Application logo image"
            className="w-14 h-14 ml-4 cursor-pointer"
          />
          <img
            src={titleImg}
            alt="Application title image"
            className="h-8 w-60 ml-4 cursor-pointer"
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-white mr-9 cursor-pointer"
        />
      </div>
    </header>
  );
});
