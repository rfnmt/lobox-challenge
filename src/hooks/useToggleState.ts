import { useState } from "react";

export function useToggleState() {
  const [state, setState] = useState(false);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return { state, setFalse, setTrue };
}
