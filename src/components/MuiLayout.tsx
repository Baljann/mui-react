import { Box, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

export const MuiLayout = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: "16px", marginBottom: 4 }}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <h1>MuiLayout Example - FlexBox & Grid</h1>
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
      <hr />
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box bgcolor="error.main" p={2} color="white">
            Item 1
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
