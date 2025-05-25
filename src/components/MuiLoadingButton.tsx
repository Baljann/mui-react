import { Box, Stack, Button, CircularProgress } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export const MuiLoadingButton = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiLoadingButton Example</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Submit</Button>

        <Button variant="outlined" disabled>
          <CircularProgress size={20} />
        </Button>

        <Button variant="outlined" disabled>
          Loading...
        </Button>

        <Button variant="outlined" startIcon={<SaveIcon />} disabled>
          Loading...
        </Button>

        <Button
          variant="outlined"
          disabled
          startIcon={<CircularProgress size={20} color="inherit" />}
        >
          Fetching...
        </Button>
      </Stack>
    </Box>
  );
};
