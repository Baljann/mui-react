import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

export const MuiMasonry = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2,  paddingBottom: 20, marginBottom: 4 }}>
      <h1>MuiMasonry Example</h1>
      <Box sx={{ width: "100%", height: 400 }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // height,
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                border: "1px solid black",
              }}
            >
              {index + 1}
              <Accordion sx={{ minHeight: height }}>
                {/* AccordionSummary is used to display the header of the accordion */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This is the content of item {index + 1}. It can be any
                    content you like.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
};
