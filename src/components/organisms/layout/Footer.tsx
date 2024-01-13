import { FC, memo } from "react";

export const Footer: FC = memo(() => {
  return (
    <footer className="fixed bottom-0 bg-stone-300 h-12 md:h-14 w-full flex justify-center items-center">
      <div className="text-white">
        &copy; 2023 Moderate Roulette. All rights reserved
      </div>
    </footer>
  );
});
