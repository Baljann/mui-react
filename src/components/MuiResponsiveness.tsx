import { styled } from "@mui/material";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <h1>MuiResponsiveness Example</h1>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 100% width on extra small screens
            sm: 200, // 200px width on small screens
            md: 300, // 300px width on medium screens
            lg: 400, // 400px width on large screens
            xl: 500, // 500px width on extra large screens
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </div>
  );
};
