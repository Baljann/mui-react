import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      m={4}
    >

      <h1>MuiLink Examples: </h1>

      <Link href="#" variant="body2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
