import { useCallback, useState } from "react";

export const useGetRandomColor = () => {
  const [itemColor, setItemColor] = useState("hsl(200, 100%, 50%)");
  let colorCount = 0;

  const getRandomColor = useCallback(() => {
    let num = 0;
    colorCount++;
    num = 360 / colorCount;
    num += Math.random();
    switch (true) {
      case colorCount > 9:
        colorCount = 1;
        break;
      case colorCount % 2 === 0:
        num = num * (colorCount - 1);
        break;
      case colorCount % 3 === 0:
        num = 90 * (Math.random() * 2);
        break;
      default:
        break;
    }
    setItemColor(`hsl(${num}, 100%, 50%)`);
  }, []);

  return { getRandomColor, itemColor };
};
