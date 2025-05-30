import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1> MuiSpeedDial Examples</h1>
      <SpeedDial
        ariaLabel="Navigabtion speed dial"
        sx={{ bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
        />
      </SpeedDial>
    </Box>
  );
};
