import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({ selectedDateTime });
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiPicker Example</h1>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <DatePicker
          label="Date Picker"
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
          value={selectedDate}
          onChange={(newValue: Date | null) => {
            setSelectedDate(newValue);
          }}
        />
        <TimePicker
          label="Time Picker"
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
          value={selectedTime}
          onChange={(newValue: Date | null) => {
            setSelectedTime(newValue);
          }}
        />
        <DateTimePicker
          label="Date Time Picker"
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
          value={selectedDateTime}
          onChange={(newValue: Date | null) => {
            setSelectedDateTime(newValue);
          }}
        />
      </Stack>
    </Box>
  );
};

export default MuiPicker;
