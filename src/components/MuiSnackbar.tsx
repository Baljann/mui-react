import { Box, Snackbar, Button } from "@mui/material";
import { useState } from "react";

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>
      <h1>MuiSnackbar Example</h1>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />

    </Box>
  );
};
