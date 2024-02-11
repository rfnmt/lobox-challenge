import clsx from "clsx";
import Styles from "./DropDown.module.scss";

interface Props {
  selectedItems: Record<string, string>;
  isDropDownOpen: boolean;
  removeSelectedItem: (item: string) => void;
}

export default function DropDownSelectedItems({
  selectedItems,
  isDropDownOpen,
  removeSelectedItem,
}: Props) {
  return (
    <div
      className={clsx(
        "flex ai-center shrink-0",
        Styles.DropDown__selectedItems
      )}
    >
      <div className="flex overflow-x-scroll mr-3 py-3 grow-1">
        {Object.values(selectedItems).map((item, index) => (
          <div
            key={`${index}_${item}`}
            className="mx-2 flex ai-center"
            style={{ flexShrink: "0" }}
          >
            <p>{item}</p>
            <i
              className={clsx("fa fa-close ml-1 pointer")}
              onClick={() => removeSelectedItem(item)}
            />
          </div>
        ))}
      </div>
      <i
        className={clsx("fa", {
          "fa-chevron-down": !isDropDownOpen,
          "fa-chevron-up": isDropDownOpen,
        })}
      />
    </div>
  );
}
