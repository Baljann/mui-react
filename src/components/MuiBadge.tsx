import { Box, Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>
      <h1>MuiBadge Example</h1>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={5} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero>
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="secondary" max={999}>
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="primary" invisible={true}>
          <MailIcon />
        </Badge>

      </Stack>
    </Box>
  );
};
