import { useEffect } from "react";

export function useKeyhold(
  targetKey: string,
  callback: (key: boolean) => void,
) {
  useEffect(() => {
    function downHandler({ key }: KeyboardEvent) {
      if (key === targetKey) {
        callback(true);
      }
    }

    function upHandler({ key }: KeyboardEvent) {
      if (key === targetKey) {
        callback(false);
      }
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey, callback]);
}
