import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}>
      <h1>MuiBottomNavigation Example</h1>
      <BottomNavigation
        sx={{ width: "100%", position: "relative", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};
