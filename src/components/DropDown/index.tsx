import TextInput from "../TextInput";
import clsx from "clsx";
import { DropDownOptionType } from "./types";
import DropDownOptions from "./DropDownOptions";
import { useDropDown } from "./useDropDown";
import { useToggleState } from "@/hooks/useToggleState";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";
import DropDownSelectedItems from "./DropDownSelectedItems";

interface Props {
  className?: string;
  options: DropDownOptionType[];
}

export default function DropDown({ className, options }: Props) {
  const {
    handleInputKeyDown,
    selectedItems,
    setSelectedItems,
    inputRef,
    removeSelectedItem,
  } = useDropDown();

  const {
    state: isDropDownOpen,
    setFalse: onClose,
    setTrue: onOpen,
  } = useToggleState();

  const dropDownRef = useRef(null);

  useClickOutside({ handler: onClose, targetRef: dropDownRef });

  return (
    <div className={clsx("relative", className)} ref={dropDownRef}>
      <TextInput
        onFocus={onOpen}
        ref={inputRef}
        onKeyDown={handleInputKeyDown}
        prependSlot={
          <DropDownSelectedItems
            isDropDownOpen={isDropDownOpen}
            selectedItems={selectedItems}
            removeSelectedItem={removeSelectedItem}
          />
        }
      />

      {isDropDownOpen && (
        <DropDownOptions
          options={options}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          removeSelectedItem={removeSelectedItem}
        />
      )}
    </div>
  );
}
