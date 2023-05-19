import { useWindowSize } from "react-use";

const mobileSize = 768;

export default function useMobileHook() {
  const { width } = useWindowSize();

  return width < mobileSize;
}
