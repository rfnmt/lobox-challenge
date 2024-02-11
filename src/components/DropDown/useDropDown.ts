import { KeyboardEventHandler, useRef, useState } from "react";
import { DropDownOptionType } from "./types";

interface Args {
  options: DropDownOptionType[];
}

export function useDropDown({ options }: Args) {
  const [optionsState, setOptionsState] = useState(options);
  const [activeItem, setActiveItem] = useState<Partial<DropDownOptionType>>({});

  const inputRef = useRef<HTMLInputElement>(null);

  const setValue = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value.trim();
      const isAlreadyExists = optionsState.some(
        (option) => option.label === value
      );
      if (value && !isAlreadyExists) {
        const newOption = { label: value, id: value };
        setOptionsState((prev) => [newOption, ...prev]);

        setActiveItem(newOption);
      }
    }
  };

  return {
    optionsState,
    activeItem,
    setActiveItem,
    setValue,
    handleInputKeyDown,
    inputRef,
  };
}
