import { Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiTimeline Example</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
