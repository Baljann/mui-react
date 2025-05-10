import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "components/MuiTextField";
import { MuiSelect } from "components/MuiSelect";
import "./App.css";
import MuiRadioButton from "components/MuiRadioButton";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
    </div>
  );
}

export default App;
