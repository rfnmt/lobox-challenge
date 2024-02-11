import clsx from "clsx";
import Styles from "./DropDown.module.scss";
import { DropDownOptionType } from "./types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  options: DropDownOptionType[];
  setValue: (value: string) => void;
  activeItem: Partial<DropDownOptionType>;
  setActiveItem: Dispatch<SetStateAction<Props["activeItem"]>>;
}

export default function DropDownOptions({
  options,
  setValue,
  activeItem,
  setActiveItem,
}: Props) {
  const selectItemHandler = (item: DropDownOptionType) => () => {
    setActiveItem(item);

    setValue(item.label);
  };

  const checkItemSelected = (item: DropDownOptionType) =>
    activeItem.id === item.id && activeItem.label === item.label;

  return (
    <div
      className={clsx(
        "absolute w-100 radius-16 mt-1 p-3",
        Styles.DropDown__optionsContainer
      )}
    >
      {options.map((item, index) => (
        <div
          className={clsx("p-3 my-2 w-100 pointer radius-8 flex jc-between", {
            [Styles["DropDown__optionItem--selected"]]: checkItemSelected(item),
          })}
          key={`${index}_${item.label}`}
          onClick={selectItemHandler(item)}
        >
          <p>{item.label}</p>
          {checkItemSelected(item) && <i className="fa fa-check" />}
        </div>
      ))}
    </div>
  );
}
