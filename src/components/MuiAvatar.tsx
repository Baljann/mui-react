import { Box, Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <Stack spacing={4}>
        <h1>MuiAvatar Examples</h1>
        <Stack direction="row" spacing={1}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        </Stack>

        <Stack direction="row" spacing={1}>
          <AvatarGroup max={3}>
            <Avatar
              src="https://randomuser.me/api/portraits/women//79.jpg"
              alt="Jane Doe"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men//79.jpg"
              alt="John Doe"
            />
            <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
            <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          </AvatarGroup>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Avatar
            variant="square"
            sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          >
            BW
          </Avatar>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "success.light", width: 48, height: 48 }}
          >
            CK
          </Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};
