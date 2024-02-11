import DropDown from "@/components/DropDown";
import { DROP_DOWN_OPTIONS } from "@/constants/dropDownOptions";
import { isMobileSize } from "./utils";
import clsx from "clsx";

function App() {
  return (
    <div className="flex ai-center jc-center h-screen color-gray text-normal">
      <DropDown
        options={DROP_DOWN_OPTIONS}
        className={clsx({
          "w-50": !isMobileSize(),
          "grow-1 mx-5 min-w-0": isMobileSize(),
        })}
      />
    </div>
  );
}

export default App;
