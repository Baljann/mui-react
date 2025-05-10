import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack
      spacing={2}
      sx={{ border: "1px solid black", padding: 2, marginBottom: 4 }}
    >
      <h1>MuiRating</h1>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
        //hightlightSelectedOnly is suitable for emoji rating
      />
    </Stack>
  );
};
