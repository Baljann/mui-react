import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiSelectField Example (Box)</h1>
      <p> Selecting multiple countries </p>
      <Box width="300px">
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          helperText="Please select your country"
          error
        >
          <MenuItem value="TR">Turkiye</MenuItem>
          <MenuItem value="KZ">Kazakhstan</MenuItem>
          <MenuItem value="SE">Sweden</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};
