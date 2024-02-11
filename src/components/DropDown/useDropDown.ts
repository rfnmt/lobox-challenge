import { KeyboardEventHandler, useRef, useState } from "react";

export function useDropDown() {
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>(
    {}
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const setValue = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  const removeSelectedItem = (item: string) => {
    // Removing Item from selected list
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [item]: target, ...rest } = selectedItems;

    setSelectedItems(rest);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value.trim();

      if (value) {
        setSelectedItems((prev) => ({ [value]: value, ...prev }));
        setValue("");
      }
    }
  };

  return {
    selectedItems,
    setSelectedItems,
    setValue,
    handleInputKeyDown,
    inputRef,
    removeSelectedItem,
  };
}
