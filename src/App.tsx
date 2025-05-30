import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "components/MuiTextField";
import { MuiSelect } from "components/MuiSelect";

import MuiRadioButton from "components/MuiRadioButton";
import { MuiCheckbox } from "components/MuiCheckbox";
import { MuiSwitch } from "components/MuiSwitch";
import { MuiRating } from "components/MuiRating";
import { MuiAutoComplete } from "components/MuiAutoComplete";
import { MuiLayout } from "components/MuiLayout";
import { MuiAccordion } from "components/MuiAccordion";
import { MuiImageList } from "components/MuiImageList";
import { MuiNavbar } from "components/MuiNavbar";
import { MuiLink } from "components/MuiLink";
import { MuiBreadcrumbs } from "components/MuiBreadcrumbs";
import { MuiDrawer } from "components/MuiDrawer";
import { MuiSpeedDial } from "components/MuiSpeedDial";
import { MuiBottomNavigation } from "components/MuiBottomNavigation";
import { MuiAvatar } from "components/MuiAvatar";
import { MuiBadge } from "components/MuiBadge";
import { MuiList } from "components/MuiList";
import { MuiChip } from "components/MuiChip";
import { MuiTooltip } from "components/MuiTooltip";
import { MuiTable } from "components/MuiTable";
import { MuiAlert } from "components/MuiAlert";
import { MuiSnackbar } from "components/MuiSnackbar";
import { MuiDialog } from "components/MuiDialog";
import { MuiProgress } from "components/MuiProgress";
import { MuiSkeleton } from "components/MuiSkeleton";
import { MuiLoadingButton } from "components/MuiLoadingButton";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiPicker from "components/MuiPicker";
import { MuiDateRangePicker } from "components/MuiDateRangePicker";
import { MuiTabs } from "components/MuiTabs";
import { MuiTimeline } from "components/MuiTimeline";
import { MuiMasonry } from "components/MuiMasonry";
import { MuiResponsiveness } from "components/MuiResponsiveness";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          <MuiLink />
          <MuiBreadcrumbs />
          <MuiDrawer />
          <MuiSpeedDial />
          <MuiBottomNavigation />
          <MuiAvatar />
          <MuiBadge />
          <MuiList />
          <MuiChip />
          <MuiTooltip />
          <MuiTable />
          <MuiAlert />
          <MuiSnackbar />
          <MuiDialog />
          <MuiProgress />
          <MuiSkeleton />
          <MuiLoadingButton />
          <MuiPicker />
          <MuiDateRangePicker />
          <MuiTabs />
          <MuiTimeline />
          <MuiMasonry />
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
