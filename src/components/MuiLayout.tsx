import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid black", padding: "16px", marginBottom: 4 }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <h1>MuiLayout Example</h1>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          I am a Front-end Developer
        </Box>
        <Box
          display="flex"
          bgcolor="success.light"
          height="100px"
          width="100px"
          p={2}
        >
          I am a Front-end Developer
        </Box>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
