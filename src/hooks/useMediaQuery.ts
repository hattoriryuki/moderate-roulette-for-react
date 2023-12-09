import { useRef } from "react";

export const useMediaQuery = () => {
  const mediaQueryRef = useRef(false);
  mediaQueryRef.current = window.matchMedia("(min-width: 768px)").matches;

  return mediaQueryRef.current;
};
