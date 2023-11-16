import { FC, memo } from "react";

type Props = {
  isOpen: boolean;
};

export const HamburgerMenu: FC<Props> = memo((props) => {
  const { isOpen } = props;

  return (
    <>
      {isOpen && (
        <div className="absolute right-5 bg-white divide-y border w-56 rounded-md py-2 shadow-md">
          <div className="flex flex-col">
            <p className="text-sm text-[#0A2463] my-2 mx-4">Rules</p>
            <div className="flex flex-col text-[#2D3748]">
              <a href="" className="py-1.5 px-3">
                利用規約
              </a>
              <a href="" className="py-1.5 px-3">
                プライバシーポリシー
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-[#0A2463] my-2 mx-4">Creactor</p>
            <div className="flex flex-col text-[#2D3748]">
              <a href="" className="py-1.5 px-3">
                X-Twitter
              </a>
              <a href="" className="py-1.5 px-3">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-[#0A2463] my-2 mx-4">Share</p>
            <div className="text-[#2D3748]">
              <a href="" className="py-1.5 px-3">
                共有する
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
