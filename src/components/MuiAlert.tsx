import {Box, Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>
      <h1>MuiAlert Examples</h1>
      <Stack spacing={2}>
        <h3>*Default Alert</h3>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is a success alert</Alert>

        <h3>*Outlined Alert</h3>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert
        </Alert>

        <h3>*Filled Alert</h3>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close Alert")}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert
        </Alert>
      </Stack>

    </Box>
  );
};
