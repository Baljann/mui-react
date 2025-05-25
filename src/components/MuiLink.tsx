import { Box, Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiLink Examples: </h1>
      <Stack spacing={2} direction="row" m={4}>
        <Link href="#" variant="body2">
          Link
        </Link>
        <Typography variant="h6">
          <Link href="#" color="secondary" underline="none">
            Secondary
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};
