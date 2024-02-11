import clsx from "clsx";
import Styles from "./DropDown.module.scss";
import { DropDownOptionType } from "./types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  options: DropDownOptionType[];
  selectedItems: Record<string, string>;
  setSelectedItems: Dispatch<SetStateAction<Props["selectedItems"]>>;
  removeSelectedItem: (item: string) => void;
}

export default function DropDownOptions({
  options,
  selectedItems,
  setSelectedItems,
  removeSelectedItem,
}: Props) {
  const selectItemHandler = (item: DropDownOptionType) => () => {
    if (selectedItems[item.label]) {
      removeSelectedItem(item.label);
    } else {
      setSelectedItems((prev) => ({ [item.label]: item.label, ...prev }));
    }
  };

  const checkItemSelected = (item: DropDownOptionType) =>
    !!selectedItems[item.label];

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
