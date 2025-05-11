import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "components/MuiTextField";
import { MuiSelect } from "components/MuiSelect";
import "./App.css";
import MuiRadioButton from "components/MuiRadioButton";
import { MuiCheckbox } from "components/MuiCheckbox";
import { MuiSwitch } from "components/MuiSwitch";
import { MuiRating } from "components/MuiRating";
import { MuiAutoComplete } from "components/MuiAutoComplete";
import { MuiLayout } from "components/MuiLayout";
import { MuiAccordion } from "components/MuiAccordion";
import { MuiImageList } from "components/MuiImageList";
import { MuiNavbar } from "components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiLayout />
      <MuiAccordion />
      <MuiImageList />
      <MuiNavbar />
    </div>
  );
}

export default App;
