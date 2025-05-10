import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiSwitch Example</h1>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
