import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const MuiDateRangePicker = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>Free DateRangePicker Example</h1>
      <Stack spacing={2} direction="row">
        <DatePicker
          label="Check-in"
          value={checkIn}
          onChange={(newValue) => setCheckIn(newValue)}
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
        />
        <DatePicker
          label="Check-out"
          value={checkOut}
          onChange={(newValue) => setCheckOut(newValue)}
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
        />
      </Stack>
    </Box>
  );
};
