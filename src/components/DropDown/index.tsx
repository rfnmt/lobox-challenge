import TextInput from "../TextInput";
import clsx from "clsx";
import { DropDownOptionType } from "./types";
import DropDownOptions from "./DropDownOptions";
import { useDropDown } from "./useDropDown";
import { useToggleState } from "@/hooks/useToggleState";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";

interface Props {
  className?: string;
  options: DropDownOptionType[];
}

export default function DropDown({ className, options }: Props) {
  const {
    activeItem,
    handleInputKeyDown,
    optionsState,
    setActiveItem,
    setValue,
    inputRef,
  } = useDropDown({ options });

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
          <i
            className={clsx("fa", {
              "fa-chevron-down": !isDropDownOpen,
              "fa-chevron-up": isDropDownOpen,
            })}
          />
        }
      />

      {isDropDownOpen && (
        <DropDownOptions
          options={optionsState}
          setValue={setValue}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </div>
  );
}
