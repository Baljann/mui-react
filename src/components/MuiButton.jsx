import { Stack, Button, IconButton } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="text" href="#">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<AdbIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Start Icon
        </Button>
        <Button variant="contained" endIcon={<AdbIcon />} disableElevation>
          End Icon
        </Button>
        <IconButton aria-label="adb" color="success" size="small">
          <AdbIcon />
        </IconButton>
      </Stack>
      <hr />
    </Stack>
  );
};

//* href becomes anchor tag  *
//
