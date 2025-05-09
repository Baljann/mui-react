import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "components/MuiTextField";
import { MuiSelect } from "components/MuiSelect";
import "./App.css";
import MuiRadioButton from "components/MuiRadioButton";
import { MuiCheckbox } from "components/MuiCheckbox";
import { MuiSwitch } from "components/MuiSwitch";
import { MuiRating } from "components/MuiRating";

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
    </div>
  );
}

export default App;
