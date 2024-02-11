import { RefObject, useEffect } from "react";

interface Args {
  targetRef: RefObject<HTMLElement>;
  handler: (event?: MouseEvent) => void;
}

export function useClickOutside({ targetRef, handler }: Args) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as HTMLElement)
      ) {
        handler(event);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // It's not a good idea to pass refs as a useEffect dependency!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);
}
