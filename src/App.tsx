import DropDown from "@/components/DropDown";
import { DROP_DOWN_OPTIONS } from "@/constants/dropDownOptions";

function App() {
  return (
    <div className="flex ai-center jc-center h-screen color-gray text-normal">
      <DropDown options={DROP_DOWN_OPTIONS} className="w-50" />
    </div>
  );
}

export default App;
