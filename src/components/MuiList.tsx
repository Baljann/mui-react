import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiList Example</h1>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 1" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 2" secondary="Secondary text" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 3" secondary="Secondary text" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
