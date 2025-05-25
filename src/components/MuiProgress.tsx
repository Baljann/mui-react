import { Box, Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiProgress Example</h1>
      <Stack spacing={2}>
        <h3>*CircularProgress</h3>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={60} />
        <h3>*LinearProgress</h3>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={80} />
      </Stack>
    </Box>
  );
};
