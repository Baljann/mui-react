import { Box, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTooltip = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiTooltip Example</h1>
      <Tooltip
        title="Delete"
        placement="right"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
